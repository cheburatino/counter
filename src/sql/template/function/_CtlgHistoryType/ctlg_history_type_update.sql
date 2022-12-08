-- создание тип истории

DROP FUNCTION IF EXISTS ctlg_history_type_update(params JSONB);
CREATE OR REPLACE FUNCTION ctlg_history_type_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    ctlg_history_typeRow     ctlg_history_type%ROWTYPE;
    checkMsg    TEXT;
    result      JSONB;
    updateValue TEXT;
    queryStr    TEXT;
    
BEGIN

    
    -- проверика наличия id
    checkMsg = check_required_params(params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;
	

    
    
    
    
    

    if (params ->> 'id')::int = -1 then
        -- проверика наличия обязательных параметров
        checkMsg = check_required_params(params, ARRAY ['title']);
        IF checkMsg IS NOT NULL
        THEN
            RETURN checkMsg;
        END IF;
        

        EXECUTE ('INSERT INTO ctlg_history_type (title, entity, icon, color, options) VALUES ($1, $2, $3, $4, $5)  RETURNING *;')
		INTO ctlg_history_typeRow
		USING
			(params ->> 'title')::text,
			(params ->> 'entity')::text,
			(params ->> 'icon')::text,
			(params ->> 'color')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['entity', 'entity', 'text'],
			['icon', 'icon', 'text'],
			['color', 'color', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE ctlg_history_type SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO ctlg_history_typeRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(ctlg_history_typeRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN ctlg_history_type_get_by_id(jsonb_build_object('id', ctlg_history_typeRow.id));

END

$function$;
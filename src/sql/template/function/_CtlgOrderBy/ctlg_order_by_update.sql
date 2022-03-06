-- создание сортировка

DROP FUNCTION IF EXISTS ctlg_order_by_update(params JSONB);
CREATE OR REPLACE FUNCTION ctlg_order_by_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    ctlg_order_byRow     ctlg_order_by%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO ctlg_order_by (title, user_table_id, index, is_default, order_by_str, options) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *;')
		INTO ctlg_order_byRow
		USING
			(params ->> 'title')::text,
			(params ->> 'user_table_id')::int,
			(params ->> 'index')::text,
			coalesce((params ->> 'is_default')::bool, false)::bool,
			(params ->> 'order_by_str')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['user_table_id', 'user_table_id', 'number'],
			['index', 'index', 'text'],
			['is_default', 'is_default', 'bool'],
			['order_by_str', 'order_by_str', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE ctlg_order_by SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO ctlg_order_byRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(ctlg_order_byRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN ctlg_order_by_get_by_id(jsonb_build_object('id', ctlg_order_byRow.id));

END

$function$;
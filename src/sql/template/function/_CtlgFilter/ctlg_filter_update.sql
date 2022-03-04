-- создание фильтр

DROP FUNCTION IF EXISTS ctlg_filter_update(params JSONB);
CREATE OR REPLACE FUNCTION ctlg_filter_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    ctlg_filterRow     ctlg_filter%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO ctlg_filter (title, user_table_id, index, where_str, options) VALUES ($1, $2, $3, $4, $5)  RETURNING *;')
		INTO ctlg_filterRow
		USING
			(params ->> 'title')::text,
			(params ->> 'user_table_id')::int,
			(params ->> 'index')::text,
			(params ->> 'where_str')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['user_table_id', 'user_table_id', 'number'],
			['index', 'index', 'text'],
			['where_str', 'where_str', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE ctlg_filter SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO ctlg_filterRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(ctlg_filterRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN ctlg_filter_get_by_id(jsonb_build_object('id', ctlg_filterRow.id));

END

$function$;
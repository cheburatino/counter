-- создание человек

DROP FUNCTION IF EXISTS man_update(params JSONB);
CREATE OR REPLACE FUNCTION man_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    manRow     man%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO man (title, last_name, name, middle_name, company_id, options) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *;')
		INTO manRow
		USING
			(params ->> 'title')::text,
			(params ->> 'last_name')::text,
			(params ->> 'name')::text,
			(params ->> 'middle_name')::text,
			(params ->> 'company_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['last_name', 'last_name', 'text'],
			['name', 'name', 'text'],
			['middle_name', 'middle_name', 'text'],
			['company_id', 'company_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE man SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO manRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(manRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN man_get_by_id(jsonb_build_object('id', manRow.id));

END

$function$;
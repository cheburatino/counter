-- создание баг

DROP FUNCTION IF EXISTS bug_update(params JSONB);
CREATE OR REPLACE FUNCTION bug_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    bugRow     bug%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO bug (title, state_id, description, files, images, customer_id, system_id, functional_requirement_id, result, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)  RETURNING *;')
		INTO bugRow
		USING
			(params ->> 'title')::text,
			(params ->> 'state_id')::int,
			(params ->> 'description')::text,
			(params -> 'files')::jsonb,
			(params -> 'images')::jsonb,
			(params ->> 'customer_id')::int,
			(params ->> 'system_id')::int,
			(params ->> 'functional_requirement_id')::int,
			(params ->> 'result')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['state_id', 'state_id', 'number'],
			['description', 'description', 'text'],
			['files', 'files', 'jsonb'],
			['images', 'images', 'jsonb'],
			['customer_id', 'customer_id', 'number'],
			['system_id', 'system_id', 'number'],
			['functional_requirement_id', 'functional_requirement_id', 'number'],
			['result', 'result', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE bug SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO bugRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(bugRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN bug_get_by_id(jsonb_build_object('id', bugRow.id));

END

$function$;
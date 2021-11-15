-- создание запрос

DROP FUNCTION IF EXISTS request_update(params JSONB);
CREATE OR REPLACE FUNCTION request_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    requestRow     request%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO request (title, priority_id, state_id, description, files, images, how_request_received, datetime_reciept, customer_id, system_id, result, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)  RETURNING *;')
		INTO requestRow
		USING
			(params ->> 'title')::text,
			(params ->> 'priority_id')::int,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'description')::text,
			(params -> 'files')::jsonb,
			(params -> 'images')::jsonb,
			(params ->> 'how_request_received')::text,
			(params ->> 'datetime_reciept')::timestamp,
			(params ->> 'customer_id')::int,
			(params ->> 'system_id')::int,
			(params ->> 'result')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['priority_id', 'priority_id', 'number'],
			['state_id', 'state_id', 'number'],
			['description', 'description', 'text'],
			['files', 'files', 'jsonb'],
			['images', 'images', 'jsonb'],
			['how_request_received', 'how_request_received', 'text'],
			['datetime_reciept', 'datetime_reciept', 'timestamp'],
			['customer_id', 'customer_id', 'number'],
			['system_id', 'system_id', 'number'],
			['result', 'result', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE request SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO requestRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(requestRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN request_get_by_id(jsonb_build_object('id', requestRow.id));

END

$function$;
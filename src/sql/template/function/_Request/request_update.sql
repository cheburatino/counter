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
        

        EXECUTE ('INSERT INTO request (title, system_id, description, rsk_id, customer_agent_id, datetime_reciept, state_id, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)  RETURNING *;')
		INTO requestRow
		USING
			(params ->> 'title')::text,
			(params ->> 'system_id')::int,
			(params ->> 'description')::text,
			(params ->> 'rsk_id')::int,
			(params ->> 'customer_agent_id')::int,
			(params ->> 'datetime_reciept')::timestamp,
			(params ->> 'state_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['system_id', 'system_id', 'number'],
			['description', 'description', 'text'],
			['rsk_id', 'rsk_id', 'number'],
			['customer_agent_id', 'customer_agent_id', 'number'],
			['datetime_reciept', 'datetime_reciept', 'timestamp'],
			['state_id', 'state_id', 'number'],
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
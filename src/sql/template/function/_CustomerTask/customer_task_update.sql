-- создание задача заказчика

DROP FUNCTION IF EXISTS customer_task_update(params JSONB);
CREATE OR REPLACE FUNCTION customer_task_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    customer_taskRow     customer_task%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO customer_task (title, state_id, description, files, images, customer_id, request_id, system_id, digital_solution_id, functional_requirement_id, bug_id, plan_start_date, plan_end_date, result, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)  RETURNING *;')
		INTO customer_taskRow
		USING
			(params ->> 'title')::text,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'description')::text,
			(params -> 'files')::jsonb,
			(params -> 'images')::jsonb,
			(params ->> 'customer_id')::int,
			(params ->> 'request_id')::int,
			(params ->> 'system_id')::int,
			(params ->> 'digital_solution_id')::int,
			(params ->> 'functional_requirement_id')::int,
			(params ->> 'bug_id')::int,
			(params ->> 'plan_start_date')::timestamp,
			(params ->> 'plan_end_date')::timestamp,
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
			['request_id', 'request_id', 'number'],
			['system_id', 'system_id', 'number'],
			['digital_solution_id', 'digital_solution_id', 'number'],
			['functional_requirement_id', 'functional_requirement_id', 'number'],
			['bug_id', 'bug_id', 'number'],
			['plan_start_date', 'plan_start_date', 'timestamp'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['result', 'result', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE customer_task SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO customer_taskRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(customer_taskRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN customer_task_get_by_id(jsonb_build_object('id', customer_taskRow.id));

END

$function$;
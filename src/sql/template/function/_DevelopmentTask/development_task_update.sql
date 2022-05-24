-- создание задача разработки

DROP FUNCTION IF EXISTS development_task_update(params JSONB);
CREATE OR REPLACE FUNCTION development_task_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    development_taskRow     development_task%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO development_task (title, type_id, state_id, system_id, digital_solution_id, responsible_id, sprint_id, estimate, internal_priority, plan_end_date, fact_end_date, description, description_files, description_images, result, result_files, result_images, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)  RETURNING *;')
		INTO development_taskRow
		USING
			(params ->> 'title')::text,
			(params ->> 'type_id')::int,
			(params ->> 'state_id')::int,
			(params ->> 'system_id')::int,
			(params ->> 'digital_solution_id')::int,
			(params ->> 'responsible_id')::int,
			(params ->> 'sprint_id')::int,
			(params ->> 'estimate')::int,
			(params ->> 'internal_priority')::int,
			(params ->> 'plan_end_date')::timestamp,
			(params ->> 'fact_end_date')::timestamp,
			(params ->> 'description')::text,
			(params -> 'description_files')::jsonb,
			(params -> 'description_images')::jsonb,
			(params ->> 'result')::text,
			(params -> 'result_files')::jsonb,
			(params -> 'result_images')::jsonb,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['type_id', 'type_id', 'number'],
			['state_id', 'state_id', 'number'],
			['system_id', 'system_id', 'number'],
			['digital_solution_id', 'digital_solution_id', 'number'],
			['responsible_id', 'responsible_id', 'number'],
			['sprint_id', 'sprint_id', 'number'],
			['estimate', 'estimate', 'number'],
			['internal_priority', 'internal_priority', 'number'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['fact_end_date', 'fact_end_date', 'timestamp'],
			['description', 'description', 'text'],
			['description_files', 'description_files', 'jsonb'],
			['description_images', 'description_images', 'jsonb'],
			['result', 'result', 'text'],
			['result_files', 'result_files', 'jsonb'],
			['result_images', 'result_images', 'jsonb'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE development_task SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO development_taskRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(development_taskRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN development_task_get_by_id(jsonb_build_object('id', development_taskRow.id));

END

$function$;
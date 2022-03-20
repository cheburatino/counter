-- создание задача

DROP FUNCTION IF EXISTS task_update(params JSONB);
CREATE OR REPLACE FUNCTION task_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    taskRow     task%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO task (title, needs_discussion, state_id, system_id, digital_solution_id, development_task_id, type_id, model_id, functional_requirement_id, bug_id, executor_id, estimate, worked_time, plan_end_date, fact_end_date, description, files, images, process, process_files, process_images, result, result_files, result_images, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)  RETURNING *;')
		INTO taskRow
		USING
			(params ->> 'title')::text,
			coalesce((params ->> 'needs_discussion')::bool, false)::bool,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'system_id')::int,
			(params ->> 'digital_solution_id')::int,
			(params ->> 'development_task_id')::int,
			(params ->> 'type_id')::int,
			(params ->> 'model_id')::int,
			(params ->> 'functional_requirement_id')::int,
			(params ->> 'bug_id')::int,
			(params ->> 'executor_id')::int,
			(params ->> 'estimate')::int,
			(params ->> 'worked_time')::int,
			(params ->> 'plan_end_date')::timestamp,
			(params ->> 'fact_end_date')::timestamp,
			(params ->> 'description')::text,
			(params -> 'files')::jsonb,
			(params -> 'images')::jsonb,
			(params ->> 'process')::text,
			(params -> 'process_files')::jsonb,
			(params -> 'process_images')::jsonb,
			(params ->> 'result')::text,
			(params -> 'result_files')::jsonb,
			(params -> 'result_images')::jsonb,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['needs_discussion', 'needs_discussion', 'bool'],
			['state_id', 'state_id', 'number'],
			['system_id', 'system_id', 'number'],
			['digital_solution_id', 'digital_solution_id', 'number'],
			['development_task_id', 'development_task_id', 'number'],
			['type_id', 'type_id', 'number'],
			['model_id', 'model_id', 'number'],
			['functional_requirement_id', 'functional_requirement_id', 'number'],
			['bug_id', 'bug_id', 'number'],
			['executor_id', 'executor_id', 'number'],
			['estimate', 'estimate', 'number'],
			['worked_time', 'worked_time', 'number'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['fact_end_date', 'fact_end_date', 'timestamp'],
			['description', 'description', 'text'],
			['files', 'files', 'jsonb'],
			['images', 'images', 'jsonb'],
			['process', 'process', 'text'],
			['process_files', 'process_files', 'jsonb'],
			['process_images', 'process_images', 'jsonb'],
			['result', 'result', 'text'],
			['result_files', 'result_files', 'jsonb'],
			['result_images', 'result_images', 'jsonb'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE task SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO taskRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(taskRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN task_get_by_id(jsonb_build_object('id', taskRow.id));

END

$function$;
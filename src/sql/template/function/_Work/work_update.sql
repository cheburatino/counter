-- создание дело

DROP FUNCTION IF EXISTS work_update(params JSONB);
CREATE OR REPLACE FUNCTION work_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    workRow     work%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO work (title, state_id, system_id, digital_solution_id, task_id, plan_end_date, fact_end_date, estimate, worked_time, specialist_priority, today, description, files, images, process, process_files, process_images, result, result_files, result_images, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)  RETURNING *;')
		INTO workRow
		USING
			(params ->> 'title')::text,
			(params ->> 'state_id')::int,
			(params ->> 'system_id')::int,
			(params ->> 'digital_solution_id')::int,
			(params ->> 'task_id')::int,
			(params ->> 'plan_end_date')::timestamp,
			(params ->> 'fact_end_date')::timestamp,
			(params ->> 'estimate')::int,
			(params ->> 'worked_time')::int,
			(params ->> 'specialist_priority')::int,
			coalesce((params ->> 'today')::bool, false)::bool,
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
			['state_id', 'state_id', 'number'],
			['system_id', 'system_id', 'number'],
			['digital_solution_id', 'digital_solution_id', 'number'],
			['task_id', 'task_id', 'number'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['fact_end_date', 'fact_end_date', 'timestamp'],
			['estimate', 'estimate', 'number'],
			['worked_time', 'worked_time', 'number'],
			['specialist_priority', 'specialist_priority', 'number'],
			['today', 'today', 'bool'],
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

        queryStr = concat('UPDATE work SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO workRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(workRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN work_get_by_id(jsonb_build_object('id', workRow.id));

END

$function$;
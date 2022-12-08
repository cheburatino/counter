-- создание задача

DROP FUNCTION IF EXISTS task_update(params JSONB);
CREATE OR REPLACE FUNCTION task_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    taskRow         task%ROWTYPE;
    checkMsg        TEXT;
    updateValue     TEXT;
    queryStr        TEXT;
    historyParam    jsonb;
    
BEGIN

    
    -- проверика наличия id
    checkMsg = check_required_params(params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    -- проверка наличия изменений по задаче, которые надо записать в историю
    historyParam = task_save_history(jsonb_build_object('update_params', params));
    params = params || jsonb_build_object('history', historyParam);

    if (params ->> 'id')::int = -1 then
        -- проверика наличия обязательных параметров
        checkMsg = check_required_params(params, ARRAY ['title']);
        IF checkMsg IS NOT NULL
        THEN
            RETURN checkMsg;
        END IF;
        

        EXECUTE ('INSERT INTO task (title, type_id, state_id, system_id, work_time_sheet_id, technical_task_id, plan_end_date, fact_end_date, specialist_priority, estimate, worked_time, today, description, files, images, process, process_files, process_images, result, result_files, result_images, history, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)  RETURNING *;')
		INTO taskRow
		USING
			(params ->> 'title')::text,
			(params ->> 'type_id')::int,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'system_id')::int,
			(params ->> 'work_time_sheet_id')::int,
			(params ->> 'technical_task_id')::int,
			(params ->> 'plan_end_date')::timestamp,
			(params ->> 'fact_end_date')::timestamp,
			(params ->> 'specialist_priority')::int,
			(params ->> 'estimate')::int,
			(params ->> 'worked_time')::int,
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
            historyParam,
			coalesce(params -> 'options', '{}')::jsonb;

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['type_id', 'type_id', 'number'],
			['state_id', 'state_id', 'number'],
			['system_id', 'system_id', 'number'],
			['work_time_sheet_id', 'work_time_sheet_id', 'number'],
			['technical_task_id', 'technical_task_id', 'number'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['fact_end_date', 'fact_end_date', 'timestamp'],
			['specialist_priority', 'specialist_priority', 'number'],
			['estimate', 'estimate', 'number'],
			['worked_time', 'worked_time', 'number'],
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
			['history', 'history', 'jsonb'],
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
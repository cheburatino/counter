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
    historyParam = task_save_history(params);
    params = params || jsonb_build_object('history', historyParam);

    if (params ->> 'id')::int = -1 then
        -- проверка наличия обязательных параметров
        checkMsg = check_required_params(params, ARRAY ['title']);
        IF checkMsg IS NOT NULL
        THEN
            RETURN checkMsg;
        END IF;
        

        EXECUTE ('INSERT INTO task (title, type_id, state_id, stage_id, system_id, plan_end_date, fact_end_date, customer_priority, estimate, worked_time, description, description_files, description_images, executor_responsible_id, customer_responsible_id, how_to_check, how_to_check_files, how_to_check_images, result, result_files, result_images, history, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)  RETURNING *;')
		INTO taskRow
		USING
			(params ->> 'title')::text,
			(params ->> 'type_id')::int,
			coalesce((params ->> 'state_id')::int, 1)::int,
			coalesce((params ->> 'stage_id')::int, 1)::int,
			(params ->> 'system_id')::int,
			(params ->> 'plan_end_date')::timestamp,
			(params ->> 'fact_end_date')::timestamp,
			(params ->> 'customer_priority')::int,
			(params ->> 'estimate')::int,
			(params ->> 'worked_time')::int,
			(params ->> 'description')::text,
			(params -> 'description_files')::jsonb,
			(params -> 'description_images')::jsonb,
            (params ->> 'executor_responsible_id')::int,
            (params ->> 'customer_responsible_id')::int,
			(params ->> 'how_to_check')::text,
			(params -> 'how_to_check_files')::jsonb,
			(params -> 'how_to_check_images')::jsonb,
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
			['stage_id', 'stage_id', 'number'],
			['system_id', 'system_id', 'number'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['fact_end_date', 'fact_end_date', 'timestamp'],
			['customer_priority', 'customer_priority', 'number'],
			['estimate', 'estimate', 'number'],
			['worked_time', 'worked_time', 'number'],
			['description', 'description', 'text'],
			['description_files', 'description_files', 'jsonb'],
			['description_images', 'description_images', 'jsonb'],
			['executor_responsible_id', 'executor_responsible_id', 'number'],
			['customer_responsible_id', 'customer_responsible_id', 'number'],
			['how_to_check', 'how_to_check', 'text'],
			['how_to_check_files', 'how_to_check_files', 'jsonb'],
			['how_to_check_images', 'how_to_check_images', 'jsonb'],
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
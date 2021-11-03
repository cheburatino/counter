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
        checkMsg = check_required_params(params, ARRAY ['title', 'type_id']);
        IF checkMsg IS NOT NULL
        THEN
            RETURN checkMsg;
        END IF;
        

        EXECUTE ('INSERT INTO task (title, state, digital_solution_id, type_id, description, files, images, author_id, director_id, executor_id, acceptor_id, plan_start_date, fact_start_date, plan_end_date, fact_end_date, result, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)  RETURNING *;')
		INTO taskRow
		USING
			(params ->> 'title')::text,
			coalesce((params ->> 'state')::int, 1)::int,
			(params ->> 'digital_solution_id')::int,
			(params ->> 'type_id')::int,
			(params ->> 'description')::text,
			(params -> 'files')::jsonb,
			(params -> 'images')::jsonb,
			(params ->> 'author_id')::int,
			(params ->> 'director_id')::int,
			(params ->> 'executor_id')::int,
			(params ->> 'acceptor_id')::int,
			(params ->> 'plan_start_date')::timestamp,
			(params ->> 'fact_start_date')::timestamp,
			(params ->> 'plan_end_date')::timestamp,
			(params ->> 'fact_end_date')::timestamp,
			(params ->> 'result')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['state', 'state', 'number'],
			['digital_solution_id', 'digital_solution_id', 'number'],
			['type_id', 'type_id', 'number'],
			['description', 'description', 'text'],
			['files', 'files', 'jsonb'],
			['images', 'images', 'jsonb'],
			['author_id', 'author_id', 'number'],
			['director_id', 'director_id', 'number'],
			['executor_id', 'executor_id', 'number'],
			['acceptor_id', 'acceptor_id', 'number'],
			['plan_start_date', 'plan_start_date', 'timestamp'],
			['fact_start_date', 'fact_start_date', 'timestamp'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['fact_end_date', 'fact_end_date', 'timestamp'],
			['result', 'result', 'text'],
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
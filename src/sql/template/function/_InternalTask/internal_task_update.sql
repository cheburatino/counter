-- создание внутренняя задача

DROP FUNCTION IF EXISTS internal_task_update(params JSONB);
CREATE OR REPLACE FUNCTION internal_task_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    internal_taskRow     internal_task%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO internal_task (title, status, description, author_id, director_id, executor_id, acceptor_id, plan_start_date, fact_start_date, plan_end_date, fact_end_date, client_id, project_id, parent_task_id, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)  RETURNING *;')
		INTO internal_taskRow
		USING
			(params ->> 'title')::text,
			(params ->> 'status')::text,
			(params ->> 'description')::text,
			(params ->> 'author_id')::int,
			(params ->> 'director_id')::int,
			(params ->> 'executor_id')::int,
			(params ->> 'acceptor_id')::int,
			(params ->> 'plan_start_date')::timestamp,
			(params ->> 'fact_start_date')::timestamp,
			(params ->> 'plan_end_date')::timestamp,
			(params ->> 'fact_end_date')::timestamp,
			(params ->> 'client_id')::int,
			(params ->> 'project_id')::int,
			(params ->> 'parent_task_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['status', 'status', 'text'],
			['description', 'description', 'text'],
			['author_id', 'author_id', 'number'],
			['director_id', 'director_id', 'number'],
			['executor_id', 'executor_id', 'number'],
			['acceptor_id', 'acceptor_id', 'number'],
			['plan_start_date', 'plan_start_date', 'timestamp'],
			['fact_start_date', 'fact_start_date', 'timestamp'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['fact_end_date', 'fact_end_date', 'timestamp'],
			['client_id', 'client_id', 'number'],
			['project_id', 'project_id', 'number'],
			['parent_task_id', 'parent_task_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE internal_task SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO internal_taskRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(internal_taskRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN internal_task_get_by_id(jsonb_build_object('id', internal_taskRow.id));

END

$function$;
-- создание участник задачи

DROP FUNCTION IF EXISTS task_specialist_link_update(params JSONB);
CREATE OR REPLACE FUNCTION task_specialist_link_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    task_specialist_linkRow     task_specialist_link%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO task_specialist_link (task_id, specialist_id, role_id, description, author_id, options) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *;')
		INTO task_specialist_linkRow
		USING
			(params ->> 'task_id')::int,
			(params ->> 'specialist_id')::int,
			(params ->> 'role_id')::int,
			(params ->> 'description')::text,
			(params ->> 'author_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['task_id', 'task_id', 'number'],
			['specialist_id', 'specialist_id', 'number'],
			['role_id', 'role_id', 'number'],
			['description', 'description', 'text'],
			['author_id', 'author_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE task_specialist_link SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO task_specialist_linkRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(task_specialist_linkRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN task_specialist_link_get_by_id(jsonb_build_object('id', task_specialist_linkRow.id));

END

$function$;
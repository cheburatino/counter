-- создание связь дела и задачи

DROP FUNCTION IF EXISTS work_task_link_update(params JSONB);
CREATE OR REPLACE FUNCTION work_task_link_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    work_task_linkRow     work_task_link%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO work_task_link (work_id, task_id, description, options) VALUES ($1, $2, $3, $4)  ON CONFLICT (work_id, task_id) DO UPDATE SET options=$4, deleted=false, description=$3 RETURNING *;')
		INTO work_task_linkRow
		USING
			(params ->> 'work_id')::int,
			(params ->> 'task_id')::int,
			(params ->> 'description')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['work_id', 'work_id', 'number'],
			['task_id', 'task_id', 'number'],
			['description', 'description', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE work_task_link SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO work_task_linkRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(work_task_linkRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN work_task_link_get_by_id(jsonb_build_object('id', work_task_linkRow.id));

END

$function$;
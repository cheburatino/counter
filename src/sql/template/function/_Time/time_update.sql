-- создание время

DROP FUNCTION IF EXISTS time_update(params JSONB);
CREATE OR REPLACE FUNCTION time_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    timeRow     time%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO time (title, minute, specialist_id, task_id, type_id, options) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *;')
		INTO timeRow
		USING
			(params ->> 'title')::text,
			(params ->> 'minute')::int,
			(params ->> 'specialist_id')::int,
			(params ->> 'task_id')::int,
			(params ->> 'type_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['minute', 'minute', 'number'],
			['specialist_id', 'specialist_id', 'number'],
			['task_id', 'task_id', 'number'],
			['type_id', 'type_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE time SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO timeRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(timeRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN time_get_by_id(jsonb_build_object('id', timeRow.id));

END

$function$;
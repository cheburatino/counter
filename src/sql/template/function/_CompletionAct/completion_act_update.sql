-- создание акт выполненных работ

DROP FUNCTION IF EXISTS completion_act_update(params JSONB);
CREATE OR REPLACE FUNCTION completion_act_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    completion_actRow     completion_act%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO completion_act (title, date, state_id, technical_task_id, options) VALUES ($1, $2, $3, $4, $5)  RETURNING *;')
		INTO completion_actRow
		USING
			(params ->> 'title')::text,
			(params ->> 'date')::timestamp,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'technical_task_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['date', 'date', 'timestamp'],
			['state_id', 'state_id', 'number'],
			['technical_task_id', 'technical_task_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE completion_act SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO completion_actRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(completion_actRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN completion_act_get_by_id(jsonb_build_object('id', completion_actRow.id));

END

$function$;
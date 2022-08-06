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
        

        EXECUTE ('INSERT INTO time (title, state_id, effort, start_time, end_time, effort_for_customer_task, effort_for_task, description, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)  RETURNING *;')
		INTO timeRow
		USING
			(params ->> 'title')::text,
			(params ->> 'state_id')::int,
			(params ->> 'effort')::int,
			coalesce((params ->> 'start_time')::timestamp, now())::timestamp,
			(params ->> 'end_time')::timestamp,
			(params ->> 'effort_for_customer_task')::int,
			(params ->> 'effort_for_task')::int,
			(params ->> 'description')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['state_id', 'state_id', 'number'],
			['effort', 'effort', 'number'],
			['start_time', 'start_time', 'timestamp'],
			['end_time', 'end_time', 'timestamp'],
			['effort_for_customer_task', 'effort_for_customer_task', 'number'],
			['effort_for_task', 'effort_for_task', 'number'],
			['description', 'description', 'text'],
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
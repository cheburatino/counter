-- создание изменение плановой даты завершение

DROP FUNCTION IF EXISTS plan_end_date_change_update(params JSONB);
CREATE OR REPLACE FUNCTION plan_end_date_change_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    plan_end_date_changeRow     plan_end_date_change%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO plan_end_date_change (title, task_id, work_day_quantity, direction, old_plan_end_date, new_plan_end_date, reason, side_id, customer_confirm, customer_confirm_datetime, author_id, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)  RETURNING *;')
		INTO plan_end_date_changeRow
		USING
			(params ->> 'title')::text,
			(params ->> 'task_id')::int,
			(params ->> 'work_day_quantity')::int,
			(params ->> 'direction')::text,
			(params ->> 'old_plan_end_date')::timestamp,
			(params ->> 'new_plan_end_date')::timestamp,
			(params ->> 'reason')::text,
			(params ->> 'side_id')::int,
			coalesce((params ->> 'customer_confirm')::bool, false)::bool,
			(params ->> 'customer_confirm_datetime')::timestamp,
			(params ->> 'author_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['task_id', 'task_id', 'number'],
			['work_day_quantity', 'work_day_quantity', 'number'],
			['direction', 'direction', 'text'],
			['old_plan_end_date', 'old_plan_end_date', 'timestamp'],
			['new_plan_end_date', 'new_plan_end_date', 'timestamp'],
			['reason', 'reason', 'text'],
			['side_id', 'side_id', 'number'],
			['customer_confirm', 'customer_confirm', 'bool'],
			['customer_confirm_datetime', 'customer_confirm_datetime', 'timestamp'],
			['author_id', 'author_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE plan_end_date_change SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO plan_end_date_changeRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(plan_end_date_changeRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN plan_end_date_change_get_by_id(jsonb_build_object('id', plan_end_date_changeRow.id));

END

$function$;
-- создание техническое задание

DROP FUNCTION IF EXISTS technical_task_update(params JSONB);
CREATE OR REPLACE FUNCTION technical_task_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    technical_taskRow     technical_task%ROWTYPE;
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
        checkMsg = check_required_params(params, ARRAY ['title', 'number']);
        IF checkMsg IS NOT NULL
        THEN
            RETURN checkMsg;
        END IF;
        

        EXECUTE ('INSERT INTO technical_task (title, state_id, work_state_id, number, amount, date, contract_id, description, document, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)  RETURNING *;')
		INTO technical_taskRow
		USING
			(params ->> 'title')::text,
			coalesce((params ->> 'state_id')::int, 1)::int,
			coalesce((params ->> 'work_state_id')::int, 1)::int,
			(params ->> 'number')::int,
			(params ->> 'amount')::int,
			(params ->> 'date')::timestamp,
			(params ->> 'contract_id')::int,
			(params ->> 'description')::text,
			(params -> 'document')::jsonb,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['state_id', 'state_id', 'number'],
			['work_state_id', 'work_state_id', 'number'],
			['number', 'number', 'number'],
			['amount', 'amount', 'number'],
			['date', 'date', 'timestamp'],
			['contract_id', 'contract_id', 'number'],
			['description', 'description', 'text'],
			['document', 'document', 'jsonb'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE technical_task SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO technical_taskRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(technical_taskRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN technical_task_get_by_id(jsonb_build_object('id', technical_taskRow.id));

END

$function$;
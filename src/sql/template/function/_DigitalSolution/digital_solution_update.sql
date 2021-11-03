-- создание цифровое решение

DROP FUNCTION IF EXISTS digital_solution_update(params JSONB);
CREATE OR REPLACE FUNCTION digital_solution_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    digital_solutionRow     digital_solution%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO digital_solution (title, state_id, sprint_id, description, customer_id, system_id, date_plan_start_modeling, date_fact_start_modeling, model, date_plan_end_modeling, date_fact_end_modeling, date_plan_start_realization, date_fact_start_realization, date_plan_end_realization, date_fact_end_realization, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)  RETURNING *;')
		INTO digital_solutionRow
		USING
			(params ->> 'title')::text,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'sprint_id')::int,
			(params ->> 'description')::text,
			(params ->> 'customer_id')::int,
			(params ->> 'system_id')::int,
			(params ->> 'date_plan_start_modeling')::timestamp,
			(params ->> 'date_fact_start_modeling')::timestamp,
			(params ->> 'model')::text,
			(params ->> 'date_plan_end_modeling')::timestamp,
			(params ->> 'date_fact_end_modeling')::timestamp,
			(params ->> 'date_plan_start_realization')::timestamp,
			(params ->> 'date_fact_start_realization')::timestamp,
			(params ->> 'date_plan_end_realization')::timestamp,
			(params ->> 'date_fact_end_realization')::timestamp,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['state_id', 'state_id', 'number'],
			['sprint_id', 'sprint_id', 'number'],
			['description', 'description', 'text'],
			['customer_id', 'customer_id', 'number'],
			['system_id', 'system_id', 'number'],
			['date_plan_start_modeling', 'date_plan_start_modeling', 'timestamp'],
			['date_fact_start_modeling', 'date_fact_start_modeling', 'timestamp'],
			['model', 'model', 'text'],
			['date_plan_end_modeling', 'date_plan_end_modeling', 'timestamp'],
			['date_fact_end_modeling', 'date_fact_end_modeling', 'timestamp'],
			['date_plan_start_realization', 'date_plan_start_realization', 'timestamp'],
			['date_fact_start_realization', 'date_fact_start_realization', 'timestamp'],
			['date_plan_end_realization', 'date_plan_end_realization', 'timestamp'],
			['date_fact_end_realization', 'date_fact_end_realization', 'timestamp'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE digital_solution SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO digital_solutionRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(digital_solutionRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN digital_solution_get_by_id(jsonb_build_object('id', digital_solutionRow.id));

END

$function$;
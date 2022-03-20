-- создание модель

DROP FUNCTION IF EXISTS model_update(params JSONB);
CREATE OR REPLACE FUNCTION model_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    modelRow     model%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO model (title, type_id, state_id, system_id, digital_solution_id, sprint_id, estimate, plan_end_date, fact_end_date, description, description_files, description_images, result, result_files, result_images, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)  RETURNING *;')
		INTO modelRow
		USING
			(params ->> 'title')::text,
			(params ->> 'type_id')::int,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'system_id')::int,
			(params ->> 'digital_solution_id')::int,
			(params ->> 'sprint_id')::int,
			(params ->> 'estimate')::int,
			(params ->> 'plan_end_date')::timestamp,
			(params ->> 'fact_end_date')::timestamp,
			(params ->> 'description')::text,
			(params -> 'description_files')::jsonb,
			(params -> 'description_images')::jsonb,
			(params ->> 'result')::text,
			(params -> 'result_files')::jsonb,
			(params -> 'result_images')::jsonb,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['type_id', 'type_id', 'number'],
			['state_id', 'state_id', 'number'],
			['system_id', 'system_id', 'number'],
			['digital_solution_id', 'digital_solution_id', 'number'],
			['sprint_id', 'sprint_id', 'number'],
			['estimate', 'estimate', 'number'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['fact_end_date', 'fact_end_date', 'timestamp'],
			['description', 'description', 'text'],
			['description_files', 'description_files', 'jsonb'],
			['description_images', 'description_images', 'jsonb'],
			['result', 'result', 'text'],
			['result_files', 'result_files', 'jsonb'],
			['result_images', 'result_images', 'jsonb'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE model SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO modelRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(modelRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN model_get_by_id(jsonb_build_object('id', modelRow.id));

END

$function$;
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
        

        EXECUTE ('INSERT INTO digital_solution (title, system_id, state_id, description, description_files, description_images, plan_date_end, fact_date_end, result, result_files, result_images, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)  RETURNING *;')
		INTO digital_solutionRow
		USING
			(params ->> 'title')::text,
			(params ->> 'system_id')::int,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'description')::text,
			(params -> 'description_files')::jsonb,
			(params -> 'description_images')::jsonb,
			(params ->> 'plan_date_end')::timestamp,
			(params ->> 'fact_date_end')::timestamp,
			(params ->> 'result')::text,
			(params -> 'result_files')::jsonb,
			(params -> 'result_images')::jsonb,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['system_id', 'system_id', 'number'],
			['state_id', 'state_id', 'number'],
			['description', 'description', 'text'],
			['description_files', 'description_files', 'jsonb'],
			['description_images', 'description_images', 'jsonb'],
			['plan_date_end', 'plan_date_end', 'timestamp'],
			['fact_date_end', 'fact_date_end', 'timestamp'],
			['result', 'result', 'text'],
			['result_files', 'result_files', 'jsonb'],
			['result_images', 'result_images', 'jsonb'],
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
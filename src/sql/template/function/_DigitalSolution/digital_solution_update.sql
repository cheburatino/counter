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
        

        EXECUTE ('INSERT INTO digital_solution (title, description, modeling_estimate_id, pre_realization_estimate_id, realization_estimate_id, sprint_id, file, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)  RETURNING *;')
		INTO digital_solutionRow
		USING
			(params ->> 'title')::text,
			(params ->> 'description')::text,
			(params ->> 'modeling_estimate_id')::int,
			(params ->> 'pre_realization_estimate_id')::int,
			(params ->> 'realization_estimate_id')::int,
			(params ->> 'sprint_id')::int,
			(params -> 'file')::jsonb,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['description', 'description', 'text'],
			['modeling_estimate_id', 'modeling_estimate_id', 'number'],
			['pre_realization_estimate_id', 'pre_realization_estimate_id', 'number'],
			['realization_estimate_id', 'realization_estimate_id', 'number'],
			['sprint_id', 'sprint_id', 'number'],
			['file', 'file', 'jsonb'],
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
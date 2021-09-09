-- создание функциональное требование

DROP FUNCTION IF EXISTS functional_requirement_update(params JSONB);
CREATE OR REPLACE FUNCTION functional_requirement_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    functional_requirementRow     functional_requirement%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO functional_requirement (title, desctiption, analyst_id, request_id, digital_solution_id, options) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *;')
		INTO functional_requirementRow
		USING
			(params ->> 'title')::text,
			(params ->> 'desctiption')::text,
			(params ->> 'analyst_id')::int,
			(params ->> 'request_id')::int,
			(params ->> 'digital_solution_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['desctiption', 'desctiption', 'text'],
			['analyst_id', 'analyst_id', 'number'],
			['request_id', 'request_id', 'number'],
			['digital_solution_id', 'digital_solution_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE functional_requirement SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO functional_requirementRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(functional_requirementRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN functional_requirement_get_by_id(jsonb_build_object('id', functional_requirementRow.id));

END

$function$;
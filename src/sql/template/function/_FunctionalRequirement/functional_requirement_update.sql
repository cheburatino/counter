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
        

        EXECUTE ('INSERT INTO functional_requirement (title, state_id, internal_priority, customer_priority, description, files, images, description_for_dev, files_for_dev, images_for_dev, customer_id, system_id, request_id, digital_solution_id, result, result_file, result_image, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)  RETURNING *;')
		INTO functional_requirementRow
		USING
			(params ->> 'title')::text,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'internal_priority')::int,
			(params ->> 'customer_priority')::int,
			(params ->> 'description')::text,
			(params -> 'files')::jsonb,
			(params -> 'images')::jsonb,
			(params ->> 'description_for_dev')::text,
			(params -> 'files_for_dev')::jsonb,
			(params -> 'images_for_dev')::jsonb,
			(params ->> 'customer_id')::int,
			(params ->> 'system_id')::int,
			(params ->> 'request_id')::int,
			(params ->> 'digital_solution_id')::int,
			(params ->> 'result')::text,
			(params -> 'result_file')::jsonb,
			(params -> 'result_image')::jsonb,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['state_id', 'state_id', 'number'],
			['internal_priority', 'internal_priority', 'number'],
			['customer_priority', 'customer_priority', 'number'],
			['description', 'description', 'text'],
			['files', 'files', 'jsonb'],
			['images', 'images', 'jsonb'],
			['description_for_dev', 'description_for_dev', 'text'],
			['files_for_dev', 'files_for_dev', 'jsonb'],
			['images_for_dev', 'images_for_dev', 'jsonb'],
			['customer_id', 'customer_id', 'number'],
			['system_id', 'system_id', 'number'],
			['request_id', 'request_id', 'number'],
			['digital_solution_id', 'digital_solution_id', 'number'],
			['result', 'result', 'text'],
			['result_file', 'result_file', 'jsonb'],
			['result_image', 'result_image', 'jsonb'],
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
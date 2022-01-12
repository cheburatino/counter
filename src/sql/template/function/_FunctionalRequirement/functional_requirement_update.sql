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
        

        EXECUTE ('INSERT INTO functional_requirement (title, paused, state_id, system_id, request_id, plan_end_date, fact_end_date, customer_priority, internal_priority, description, files, images, description_for_dev, files_for_dev, images_for_dev, result, result_file, result_image, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)  RETURNING *;')
		INTO functional_requirementRow
		USING
			(params ->> 'title')::text,
			coalesce((params ->> 'paused')::bool, false)::bool,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'system_id')::int,
			(params ->> 'request_id')::int,
			(params ->> 'plan_end_date')::timestamp,
			(params ->> 'fact_end_date')::timestamp,
			(params ->> 'customer_priority')::int,
			(params ->> 'internal_priority')::int,
			(params ->> 'description')::text,
			(params -> 'files')::jsonb,
			(params -> 'images')::jsonb,
			(params ->> 'description_for_dev')::text,
			(params -> 'files_for_dev')::jsonb,
			(params -> 'images_for_dev')::jsonb,
			(params ->> 'result')::text,
			(params -> 'result_file')::jsonb,
			(params -> 'result_image')::jsonb,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['paused', 'paused', 'bool'],
			['state_id', 'state_id', 'number'],
			['system_id', 'system_id', 'number'],
			['request_id', 'request_id', 'number'],
			['plan_end_date', 'plan_end_date', 'timestamp'],
			['fact_end_date', 'fact_end_date', 'timestamp'],
			['customer_priority', 'customer_priority', 'number'],
			['internal_priority', 'internal_priority', 'number'],
			['description', 'description', 'text'],
			['files', 'files', 'jsonb'],
			['images', 'images', 'jsonb'],
			['description_for_dev', 'description_for_dev', 'text'],
			['files_for_dev', 'files_for_dev', 'jsonb'],
			['images_for_dev', 'images_for_dev', 'jsonb'],
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
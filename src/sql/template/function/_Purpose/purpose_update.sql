-- создание цель

DROP FUNCTION IF EXISTS purpose_update(params JSONB);
CREATE OR REPLACE FUNCTION purpose_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    purposeRow     purpose%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO purpose (title, system_id, state_id, description, file, sprint_id, result_description, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)  RETURNING *;')
		INTO purposeRow
		USING
			(params ->> 'title')::text,
			(params ->> 'system_id')::int,
			(params ->> 'state_id')::int,
			(params ->> 'description')::text,
			(params -> 'file')::jsonb,
			(params ->> 'sprint_id')::int,
			(params ->> 'result_description')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['system_id', 'system_id', 'number'],
			['state_id', 'state_id', 'number'],
			['description', 'description', 'text'],
			['file', 'file', 'jsonb'],
			['sprint_id', 'sprint_id', 'number'],
			['result_description', 'result_description', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE purpose SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO purposeRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(purposeRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN purpose_get_by_id(jsonb_build_object('id', purposeRow.id));

END

$function$;
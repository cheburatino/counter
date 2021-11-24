-- создание система

DROP FUNCTION IF EXISTS system_update(params JSONB);
CREATE OR REPLACE FUNCTION system_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    systemRow     system%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO system (title, state, description, files, images, customer_id, options) VALUES ($1, $2, $3, $4, $5, $6, $7)  RETURNING *;')
		INTO systemRow
		USING
			(params ->> 'title')::text,
			(params ->> 'state')::text,
			(params ->> 'description')::text,
			(params -> 'files')::jsonb,
			(params -> 'images')::jsonb,
			(params ->> 'customer_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['state', 'state', 'text'],
			['description', 'description', 'text'],
			['files', 'files', 'jsonb'],
			['images', 'images', 'jsonb'],
			['customer_id', 'customer_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE system SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO systemRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(systemRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN system_get_by_id(jsonb_build_object('id', systemRow.id));

END

$function$;
-- создание юр.лицо

DROP FUNCTION IF EXISTS legal_entity_update(params JSONB);
CREATE OR REPLACE FUNCTION legal_entity_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    legal_entityRow     legal_entity%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO legal_entity (title, company_id, description, requisites, options) VALUES ($1, $2, $3, $4, $5)  RETURNING *;')
		INTO legal_entityRow
		USING
			(params ->> 'title')::text,
			(params ->> 'company_id')::int,
			(params ->> 'description')::text,
			(params ->> 'requisites')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['company_id', 'company_id', 'number'],
			['description', 'description', 'text'],
			['requisites', 'requisites', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE legal_entity SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO legal_entityRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(legal_entityRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN legal_entity_get_by_id(jsonb_build_object('id', legal_entityRow.id));

END

$function$;
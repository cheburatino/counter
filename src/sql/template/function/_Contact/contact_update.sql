-- создание контакт

DROP FUNCTION IF EXISTS contact_update(params JSONB);
CREATE OR REPLACE FUNCTION contact_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    contactRow     contact%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO contact (title, last_name, first_name, middle_name, user_table_id, company_id, position, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)  RETURNING *;')
		INTO contactRow
		USING
			(params ->> 'title')::text,
			(params ->> 'last_name')::text,
			(params ->> 'first_name')::text,
			(params ->> 'middle_name')::text,
			(params ->> 'user_table_id')::int,
			(params ->> 'company_id')::int,
			(params ->> 'position')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['last_name', 'last_name', 'text'],
			['first_name', 'first_name', 'text'],
			['middle_name', 'middle_name', 'text'],
			['user_table_id', 'user_table_id', 'number'],
			['company_id', 'company_id', 'number'],
			['position', 'position', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE contact SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO contactRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(contactRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN contact_get_by_id(jsonb_build_object('id', contactRow.id));

END

$function$;
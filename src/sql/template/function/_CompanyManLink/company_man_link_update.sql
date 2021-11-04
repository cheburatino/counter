-- создание связь компании и человека

DROP FUNCTION IF EXISTS company_man_link_update(params JSONB);
CREATE OR REPLACE FUNCTION company_man_link_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    company_man_linkRow     company_man_link%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO company_man_link (company_id, man_id, description, author_id, options) VALUES ($1, $2, $3, $4, $5)  ON CONFLICT (company_id, man_id) DO UPDATE SET options=$5, deleted=false, description=$3 RETURNING *;')
		INTO company_man_linkRow
		USING
			(params ->> 'company_id')::int,
			(params ->> 'man_id')::int,
			(params ->> 'description')::text,
			(params ->> 'author_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['company_id', 'company_id', 'number'],
			['man_id', 'man_id', 'number'],
			['description', 'description', 'text'],
			['author_id', 'author_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE company_man_link SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO company_man_linkRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(company_man_linkRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN company_man_link_get_by_id(jsonb_build_object('id', company_man_linkRow.id));

END

$function$;
-- создание связь цифрового решения и заказчика

DROP FUNCTION IF EXISTS digital_solution_customer_agent_link_update(params JSONB);
CREATE OR REPLACE FUNCTION digital_solution_customer_agent_link_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    digital_solution_customer_agent_linkRow     digital_solution_customer_agent_link%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO digital_solution_customer_agent_link (digital_solution_id, customer_agent_id, description, author_id, options) VALUES ($1, $2, $3, $4, $5)  ON CONFLICT (digital_solution_id, customer_agent_id) DO UPDATE SET options=$5, deleted=false, description=$3 RETURNING *;')
		INTO digital_solution_customer_agent_linkRow
		USING
			(params ->> 'digital_solution_id')::int,
			(params ->> 'customer_agent_id')::int,
			(params ->> 'description')::text,
			(params ->> 'author_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['digital_solution_id', 'digital_solution_id', 'number'],
			['customer_agent_id', 'customer_agent_id', 'number'],
			['description', 'description', 'text'],
			['author_id', 'author_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE digital_solution_customer_agent_link SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO digital_solution_customer_agent_linkRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(digital_solution_customer_agent_linkRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN digital_solution_customer_agent_link_get_by_id(jsonb_build_object('id', digital_solution_customer_agent_linkRow.id));

END

$function$;
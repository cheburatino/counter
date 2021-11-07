-- создание связь функционального требования и представителя заказчика

DROP FUNCTION IF EXISTS functional_requirement_customer_agent_link_update(params JSONB);
CREATE OR REPLACE FUNCTION functional_requirement_customer_agent_link_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    functional_requirement_customer_agent_linkRow     functional_requirement_customer_agent_link%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO functional_requirement_customer_agent_link (functional_requirement_id, customer_agent_id, description, author_id, options) VALUES ($1, $2, $3, $4, $5)  ON CONFLICT (functional_requirement_id, customer_agent_id) DO UPDATE SET options=$5, deleted=false, description=$3 RETURNING *;')
		INTO functional_requirement_customer_agent_linkRow
		USING
			(params ->> 'functional_requirement_id')::int,
			(params ->> 'customer_agent_id')::int,
			(params ->> 'description')::text,
			(params ->> 'author_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['functional_requirement_id', 'functional_requirement_id', 'number'],
			['customer_agent_id', 'customer_agent_id', 'number'],
			['description', 'description', 'text'],
			['author_id', 'author_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE functional_requirement_customer_agent_link SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO functional_requirement_customer_agent_linkRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(functional_requirement_customer_agent_linkRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN functional_requirement_customer_agent_link_get_by_id(jsonb_build_object('id', functional_requirement_customer_agent_linkRow.id));

END

$function$;
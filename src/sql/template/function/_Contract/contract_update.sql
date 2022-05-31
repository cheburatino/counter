-- создание договор

DROP FUNCTION IF EXISTS contract_update(params JSONB);
CREATE OR REPLACE FUNCTION contract_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    contractRow     contract%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO contract (title, date, state_id, company_id, counterparty_id, description, document, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)  RETURNING *;')
		INTO contractRow
		USING
			(params ->> 'title')::text,
			(params ->> 'date')::timestamp,
			coalesce((params ->> 'state_id')::int, 1)::int,
			(params ->> 'company_id')::int,
			(params ->> 'counterparty_id')::int,
			(params ->> 'description')::text,
			(params -> 'document')::jsonb,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['date', 'date', 'timestamp'],
			['state_id', 'state_id', 'number'],
			['company_id', 'company_id', 'number'],
			['counterparty_id', 'counterparty_id', 'number'],
			['description', 'description', 'text'],
			['document', 'document', 'jsonb'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE contract SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO contractRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(contractRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN contract_get_by_id(jsonb_build_object('id', contractRow.id));

END

$function$;
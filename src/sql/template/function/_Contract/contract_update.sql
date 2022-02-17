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
        

        EXECUTE ('INSERT INTO contract (title, date, description, draft, signed, counterparty_id, state, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)  RETURNING *;')
		INTO contractRow
		USING
			(params ->> 'title')::text,
			(params ->> 'date')::timestamp,
			(params ->> 'description')::text,
			(params -> 'draft')::jsonb,
			(params -> 'signed')::jsonb,
			(params ->> 'counterparty_id')::int,
			(params ->> 'state')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['date', 'date', 'timestamp'],
			['description', 'description', 'text'],
			['draft', 'draft', 'jsonb'],
			['signed', 'signed', 'jsonb'],
			['counterparty_id', 'counterparty_id', 'number'],
			['state', 'state', 'text'],
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
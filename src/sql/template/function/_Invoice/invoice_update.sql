-- создание счёт

DROP FUNCTION IF EXISTS invoice_update(params JSONB);
CREATE OR REPLACE FUNCTION invoice_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    invoiceRow     invoice%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO invoice (title, total_amount, state, system_id, payer_id, recipient_id, date_plan_transfer, date_plan_paid, date_transfer, date_paid, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)  RETURNING *;')
		INTO invoiceRow
		USING
			(params ->> 'title')::text,
			(params ->> 'total_amount')::int,
			(params ->> 'state')::text,
			(params ->> 'system_id')::int,
			(params ->> 'payer_id')::int,
			(params ->> 'recipient_id')::int,
			(params ->> 'date_plan_transfer')::timestamp,
			(params ->> 'date_plan_paid')::timestamp,
			(params ->> 'date_transfer')::timestamp,
			(params ->> 'date_paid')::timestamp,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['total_amount', 'total_amount', 'number'],
			['state', 'state', 'text'],
			['system_id', 'system_id', 'number'],
			['payer_id', 'payer_id', 'number'],
			['recipient_id', 'recipient_id', 'number'],
			['date_plan_transfer', 'date_plan_transfer', 'timestamp'],
			['date_plan_paid', 'date_plan_paid', 'timestamp'],
			['date_transfer', 'date_transfer', 'timestamp'],
			['date_paid', 'date_paid', 'timestamp'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE invoice SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO invoiceRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(invoiceRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN invoice_get_by_id(jsonb_build_object('id', invoiceRow.id));

END

$function$;
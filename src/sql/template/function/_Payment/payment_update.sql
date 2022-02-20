-- создание платёж

DROP FUNCTION IF EXISTS payment_update(params JSONB);
CREATE OR REPLACE FUNCTION payment_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    paymentRow     payment%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO payment (title, amount, payment_date, payment_receipt_date, invoice_id, payment_order, description, options) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)  RETURNING *;')
		INTO paymentRow
		USING
			(params ->> 'title')::text,
			(params ->> 'amount')::int,
			(params ->> 'payment_date')::timestamp,
			(params ->> 'payment_receipt_date')::timestamp,
			(params ->> 'invoice_id')::int,
			(params -> 'payment_order')::jsonb,
			(params ->> 'description')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['amount', 'amount', 'number'],
			['payment_date', 'payment_date', 'timestamp'],
			['payment_receipt_date', 'payment_receipt_date', 'timestamp'],
			['invoice_id', 'invoice_id', 'number'],
			['payment_order', 'payment_order', 'jsonb'],
			['description', 'description', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE payment SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO paymentRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(paymentRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN payment_get_by_id(jsonb_build_object('id', paymentRow.id));

END

$function$;
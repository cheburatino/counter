-- функция триггер
DROP FUNCTION IF EXISTS invoice_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION invoice_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	systemTitle TEXT;
	payerTitle TEXT;
	recipientTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into systemTitle from system where id = new.system_id;
		select title into payerTitle from counterparty where id = new.payer_id;
		select title into recipientTitle from counterparty where id = new.recipient_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'system_title', systemTitle, 'payer_title', payerTitle, 'recipient_title', recipientTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', systemTitle, ' ', payerTitle, ' ', recipientTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


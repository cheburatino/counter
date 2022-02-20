-- функция триггер
DROP FUNCTION IF EXISTS payment_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION payment_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	invoiceTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into invoiceTitle from invoice where id = new.invoice_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'invoice_title', invoiceTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', invoiceTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


-- функция триггер
DROP FUNCTION IF EXISTS contract_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION contract_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	counterpartyTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into counterpartyTitle from counterparty where id = new.counterparty_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'counterparty_title', counterpartyTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', counterpartyTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


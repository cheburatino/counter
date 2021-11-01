-- функция триггер
DROP FUNCTION IF EXISTS system_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION system_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	customerTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into customerTitle from company where id = new.customer_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'customer_title', customerTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', customerTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


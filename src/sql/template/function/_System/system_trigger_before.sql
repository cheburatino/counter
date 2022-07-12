-- функция триггер
DROP FUNCTION IF EXISTS system_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION system_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	customerTitle TEXT;
	stateTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into customerTitle from company where id = new.customer_id;
		select title into stateTitle from ctlg_system_state where id = new.state_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'customer_title', customerTitle, 'state_title', stateTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', customerTitle, ' ', stateTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


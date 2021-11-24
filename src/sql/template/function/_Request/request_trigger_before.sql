-- функция триггер
DROP FUNCTION IF EXISTS request_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION request_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	priorityTitle TEXT;
	stateTitle TEXT;
	customerTitle TEXT;
	systemTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into priorityTitle from ctlg_request_priority where id = new.priority_id;
		select title into stateTitle from ctlg_request_state where id = new.state_id;
		select title into customerTitle from company where id = new.customer_id;
		select title into systemTitle from system where id = new.system_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'priority_title', priorityTitle, 'state_title', stateTitle, 'customer_title', customerTitle, 'system_title', systemTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', priorityTitle, ' ', stateTitle, ' ', customerTitle, ' ', systemTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


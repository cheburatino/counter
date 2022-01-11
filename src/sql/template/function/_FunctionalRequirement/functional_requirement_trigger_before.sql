-- функция триггер
DROP FUNCTION IF EXISTS functional_requirement_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION functional_requirement_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	systemTitle TEXT;
	requestTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_functional_requirement_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into requestTitle from request where id = new.request_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'system_title', systemTitle, 'request_title', requestTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', systemTitle, ' ', requestTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


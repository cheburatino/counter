-- функция триггер
DROP FUNCTION IF EXISTS request_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION request_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	systemTitle TEXT;
	rskTitle TEXT;
	customerAgentTitle TEXT;
	stateTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN
        

        -- заполняем ref поля
		select title into systemTitle from system where id = new.system_id;
		select title into rskTitle from employee where id = new.rsk_id;
		select title into customerAgentTitle from man where id = new.customer_agent_id;
		select title into stateTitle from ctlg_request_state where id = new.state_id;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'system_title', systemTitle, 'rsk_title', rskTitle, 'customer_agent_title', customerAgentTitle, 'state_title', stateTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', systemTitle, ' ', rskTitle, ' ', customerAgentTitle, ' ', stateTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


-- функция триггер
DROP FUNCTION IF EXISTS request_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION request_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	systemTitle TEXT;
	stateTitle TEXT;
	rskTitle TEXT;
	customerTitle TEXT;
	customerAgentTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into systemTitle from system where id = new.system_id;
		select title into stateTitle from ctlg_request_state where id = new.state_id;
		select title into rskTitle from man where id = new.rsk_id;
		select title into customerTitle from company where id = new.customer_id;
		select title into customerAgentTitle from man where id = new.customer_agent_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'system_title', systemTitle, 'state_title', stateTitle, 'rsk_title', rskTitle, 'customer_title', customerTitle, 'customer_agent_title', customerAgentTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', systemTitle, ' ', stateTitle, ' ', rskTitle, ' ', customerTitle, ' ', customerAgentTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


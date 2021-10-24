-- функция триггер
DROP FUNCTION IF EXISTS digital_solution_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION digital_solution_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	sprintTitle TEXT;
	customerTitle TEXT;
	rskTitle TEXT;
	systemTitle TEXT;
	analystTitle TEXT;
	clientAgentTitle TEXT;
	teamLeadTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_digital_solution_state where id = new.state_id;
		select title into sprintTitle from sprint where id = new.sprint_id;
		select title into customerTitle from company where id = new.customer_id;
		select title into rskTitle from man where id = new.rsk_id;
		select title into systemTitle from system where id = new.system_id;
		select title into analystTitle from man where id = new.analyst_id;
		select title into clientAgentTitle from man where id = new.client_agent_id;
		select title into teamLeadTitle from man where id = new.team_lead_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'sprint_title', sprintTitle, 'customer_title', customerTitle, 'rsk_title', rskTitle, 'system_title', systemTitle, 'analyst_title', analystTitle, 'client_agent_title', clientAgentTitle, 'team_lead_title', teamLeadTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', sprintTitle, ' ', customerTitle, ' ', rskTitle, ' ', systemTitle, ' ', analystTitle, ' ', clientAgentTitle, ' ', teamLeadTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


-- функция триггер
DROP FUNCTION IF EXISTS digital_solution_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION digital_solution_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	sprintTitle TEXT;
	systemTitle TEXT;
	customerTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_digital_solution_state where id = new.state_id;
		select title into sprintTitle from sprint where id = new.sprint_id;
		select title into systemTitle from system where id = new.system_id;
		select title into customerTitle from company where id = new.customer_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'sprint_title', sprintTitle, 'system_title', systemTitle, 'customer_title', customerTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', sprintTitle, ' ', systemTitle, ' ', customerTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


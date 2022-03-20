-- функция триггер
DROP FUNCTION IF EXISTS functional_requirement_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION functional_requirement_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	systemTitle TEXT;
	digitalSolutionTitle TEXT;
	sprintTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_functional_requirement_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into sprintTitle from sprint where id = new.sprint_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'system_title', systemTitle, 'digital_solution_title', digitalSolutionTitle, 'sprint_title', sprintTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', systemTitle, ' ', digitalSolutionTitle, ' ', sprintTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


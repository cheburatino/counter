-- функция триггер
DROP FUNCTION IF EXISTS bug_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION bug_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	functionalRequirementTitle TEXT;
	digitalSolutionTitle TEXT;
	systemTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_bug_state where id = new.state_id;
		select title into functionalRequirementTitle from functional_requirement where id = new.functional_requirement_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into systemTitle from system where id = new.system_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'functional_requirement_title', functionalRequirementTitle, 'digital_solution_title', digitalSolutionTitle, 'system_title', systemTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', functionalRequirementTitle, ' ', digitalSolutionTitle, ' ', systemTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


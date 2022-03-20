-- функция триггер
DROP FUNCTION IF EXISTS model_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION model_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	typeTitle TEXT;
	stateTitle TEXT;
	systemTitle TEXT;
	digitalSolutionTitle TEXT;
	sprintTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into typeTitle from ctlg_model_type where id = new.type_id;
		select title into stateTitle from ctlg_model_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into sprintTitle from sprint where id = new.sprint_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'type_title', typeTitle, 'state_title', stateTitle, 'system_title', systemTitle, 'digital_solution_title', digitalSolutionTitle, 'sprint_title', sprintTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', typeTitle, ' ', stateTitle, ' ', systemTitle, ' ', digitalSolutionTitle, ' ', sprintTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


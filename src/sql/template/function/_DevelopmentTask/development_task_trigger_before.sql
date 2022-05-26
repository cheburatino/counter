-- функция триггер
DROP FUNCTION IF EXISTS development_task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION development_task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	typeTitle TEXT;
	stateTitle TEXT;
	systemTitle TEXT;
	digitalSolutionTitle TEXT;
	technicalTaskTitle TEXT;
	responsibleTitle TEXT;
	sprintTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into typeTitle from ctlg_development_task_type where id = new.type_id;
		select title into stateTitle from ctlg_development_task_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into technicalTaskTitle from technical_task where id = new.technical_task_id;
		select title into responsibleTitle from man where id = new.responsible_id;
		select title into sprintTitle from sprint where id = new.sprint_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'type_title', typeTitle, 'state_title', stateTitle, 'system_title', systemTitle, 'digital_solution_title', digitalSolutionTitle, 'technical_task_title', technicalTaskTitle, 'responsible_title', responsibleTitle, 'sprint_title', sprintTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', typeTitle, ' ', stateTitle, ' ', systemTitle, ' ', digitalSolutionTitle, ' ', technicalTaskTitle, ' ', responsibleTitle, ' ', sprintTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


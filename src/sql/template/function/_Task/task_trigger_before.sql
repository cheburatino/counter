-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	typeTitle TEXT;
	systemTitle TEXT;
	digitalSolutionTitle TEXT;
	developmentTaskTitle TEXT;
	executorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_task_state where id = new.state_id;
		select title into typeTitle from ctlg_task_type where id = new.type_id;
		select title into systemTitle from system where id = new.system_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into developmentTaskTitle from development_task where id = new.development_task_id;
		select title into executorTitle from man where id = new.executor_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'type_title', typeTitle, 'system_title', systemTitle, 'digital_solution_title', digitalSolutionTitle, 'development_task_title', developmentTaskTitle, 'executor_title', executorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', typeTitle, ' ', systemTitle, ' ', digitalSolutionTitle, ' ', developmentTaskTitle, ' ', executorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


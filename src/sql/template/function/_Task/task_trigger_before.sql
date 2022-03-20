-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	systemTitle TEXT;
	digitalSolutionTitle TEXT;
	typeTitle TEXT;
	modelTitle TEXT;
	functionalRequirementTitle TEXT;
	bugTitle TEXT;
	executorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_task_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into typeTitle from ctlg_task_type where id = new.type_id;
		select title into modelTitle from model where id = new.model_id;
		select title into functionalRequirementTitle from functional_requirement where id = new.functional_requirement_id;
		select title into bugTitle from bug where id = new.bug_id;
		select title into executorTitle from man where id = new.executor_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'system_title', systemTitle, 'digital_solution_title', digitalSolutionTitle, 'type_title', typeTitle, 'model_title', modelTitle, 'functional_requirement_title', functionalRequirementTitle, 'bug_title', bugTitle, 'executor_title', executorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', systemTitle, ' ', digitalSolutionTitle, ' ', typeTitle, ' ', modelTitle, ' ', functionalRequirementTitle, ' ', bugTitle, ' ', executorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


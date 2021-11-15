-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	typeTitle TEXT;
	stateTitle TEXT;
	customerTitle TEXT;
	requestTitle TEXT;
	systemTitle TEXT;
	digitalSolutionTitle TEXT;
	functionalRequirementTitle TEXT;
	bugTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into typeTitle from ctlg_task_type where id = new.type_id;
		select title into stateTitle from ctlg_task_state where id = new.state_id;
		select title into customerTitle from company where id = new.customer_id;
		select title into requestTitle from request where id = new.request_id;
		select title into systemTitle from system where id = new.system_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into functionalRequirementTitle from functional_requirement where id = new.functional_requirement_id;
		select title into bugTitle from bug where id = new.bug_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'type_title', typeTitle, 'state_title', stateTitle, 'customer_title', customerTitle, 'request_title', requestTitle, 'system_title', systemTitle, 'digital_solution_title', digitalSolutionTitle, 'functional_requirement_title', functionalRequirementTitle, 'bug_title', bugTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', typeTitle, ' ', stateTitle, ' ', customerTitle, ' ', requestTitle, ' ', systemTitle, ' ', digitalSolutionTitle, ' ', functionalRequirementTitle, ' ', bugTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


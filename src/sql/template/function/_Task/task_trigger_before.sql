-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	systemTitle TEXT;
	sprintTitle TEXT;
	functionalRequirementTitle TEXT;
	bugTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_task_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into sprintTitle from sprint where id = new.sprint_id;
		select title into functionalRequirementTitle from functional_requirement where id = new.functional_requirement_id;
		select title into bugTitle from bug where id = new.bug_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'system_title', systemTitle, 'sprint_title', sprintTitle, 'functional_requirement_title', functionalRequirementTitle, 'bug_title', bugTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', systemTitle, ' ', sprintTitle, ' ', functionalRequirementTitle, ' ', bugTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


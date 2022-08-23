-- функция триггер
DROP FUNCTION IF EXISTS work_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION work_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	systemTitle TEXT;
	taskTitle TEXT;
	meetingTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_work_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into taskTitle from task where id = new.task_id;
		select title into meetingTitle from meeting where id = new.meeting_id;
        
		if new.task_id notnull
        then
            new.digital_solution_id = (select digital_solution_id from task where id = new.task_id);
            new.system_id = (select system_id from task where id = new.task_id);
        end if;

        if new.task_id isnull and new.digital_solution_id notnull
        then
            new.system_id = (select system_id from digital_solution where id = new.digital_solution_id);
        end if;	
			
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'system_title', systemTitle, 'task_title', taskTitle, 'meeting_title', meetingTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', systemTitle, ' ', taskTitle, ' ', meetingTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


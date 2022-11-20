-- функция триггер
DROP FUNCTION IF EXISTS customer_task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION customer_task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	systemTitle TEXT;
	taskTitle TEXT;
	responsibleTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_customer_task_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into taskTitle from task where id = new.task_id;
		select title into responsibleTitle from man where id = new.responsible_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'system_title', systemTitle, 'task_title', taskTitle, 'responsible_title', responsibleTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', systemTitle, ' ', taskTitle, ' ', responsibleTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


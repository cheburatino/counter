-- функция триггер
DROP FUNCTION IF EXISTS customer_task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION customer_task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	systemTitle TEXT;
	digitalSolutionTitle TEXT;
	developmentTaskTitle TEXT;
	responsibleTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_customer_task_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into developmentTaskTitle from development_task where id = new.development_task_id;
		select title into responsibleTitle from man where id = new.responsible_id;
        
		if new.development_task_id notnull
		then
            new.system_id = (select system_id from development_task where id = new.development_task_id);
        end if;
			
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'system_title', systemTitle, 'digital_solution_title', digitalSolutionTitle, 'development_task_title', developmentTaskTitle, 'responsible_title', responsibleTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', systemTitle, ' ', digitalSolutionTitle, ' ', developmentTaskTitle, ' ', responsibleTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


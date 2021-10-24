-- функция триггер
DROP FUNCTION IF EXISTS time_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION time_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	specialistTitle TEXT;
	typeTitle TEXT;
	taskTitle TEXT;
	digitalSolutionTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into specialistTitle from man where id = new.specialist_id;
		select title into typeTitle from ctlg_time_type where id = new.type_id;
		select title into taskTitle from task where id = new.task_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'specialist_title', specialistTitle, 'type_title', typeTitle, 'task_title', taskTitle, 'digital_solution_title', digitalSolutionTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', specialistTitle, ' ', typeTitle, ' ', taskTitle, ' ', digitalSolutionTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


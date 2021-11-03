-- функция триггер
DROP FUNCTION IF EXISTS work_task_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION work_task_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	workTitle TEXT;
	taskTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into workTitle from work where id = new.work_id;
		select title into taskTitle from task where id = new.task_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('work_title', workTitle, 'task_title', taskTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(workTitle, ' ', taskTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


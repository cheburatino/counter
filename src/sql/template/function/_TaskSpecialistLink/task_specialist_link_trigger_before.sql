-- функция триггер
DROP FUNCTION IF EXISTS task_specialist_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_specialist_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	taskTitle TEXT;
	specialistTitle TEXT;
	roleTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into taskTitle from task where id = new.task_id;
		select title into specialistTitle from man where id = new.specialist_id;
		select title into roleTitle from ctlg_task_role where id = new.role_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'task_title', taskTitle, 'specialist_title', specialistTitle, 'role_title', roleTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', taskTitle, ' ', specialistTitle, ' ', roleTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


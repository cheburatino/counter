-- функция триггер
DROP FUNCTION IF EXISTS plan_end_date_change_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION plan_end_date_change_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	taskTitle TEXT;
	sideTitle TEXT;
	authorTitle TEXT;
	authorAvatar TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into taskTitle from task where id = new.task_id;
		select title into sideTitle from ctlg_plan_end_date_change_side where id = new.side_id;
		select title, avatar into authorTitle, authorAvatar from "user" where id = new.author_id;
        
        NEW.title = new.id || ' ' || new.direction;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'task_title', taskTitle, 'side_title', sideTitle, 'author_title', authorTitle, 'author_avatar', authorAvatar));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', taskTitle, ' ', sideTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


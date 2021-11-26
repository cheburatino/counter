-- функция триггер
DROP FUNCTION IF EXISTS work_specialist_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION work_specialist_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	workTitle TEXT;
	specialistTitle TEXT;
	authorTitle TEXT;
	roleTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into workTitle from task where id = new.work_id;
		select title into specialistTitle from man where id = new.specialist_id;
		select title into authorTitle from man where id = new.author_id;
		select title into roleTitle from ctlg_work_specialist_role where id = new.role_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('work_title', workTitle, 'specialist_title', specialistTitle, 'author_title', authorTitle, 'role_title', roleTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(workTitle, ' ', specialistTitle, ' ', authorTitle, ' ', roleTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


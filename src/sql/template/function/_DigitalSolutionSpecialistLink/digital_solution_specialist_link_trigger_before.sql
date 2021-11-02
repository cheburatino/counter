-- функция триггер
DROP FUNCTION IF EXISTS digital_solution_specialist_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION digital_solution_specialist_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	digitalSolutionTitle TEXT;
	specialistTitle TEXT;
	roleTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into specialistTitle from man where id = new.specialist_id;
		select title into roleTitle from ctlg_digital_solution_specialist_role where id = new.role_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'digital_solution_title', digitalSolutionTitle, 'specialist_title', specialistTitle, 'role_title', roleTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', digitalSolutionTitle, ' ', specialistTitle, ' ', roleTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


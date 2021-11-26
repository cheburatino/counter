-- функция триггер
DROP FUNCTION IF EXISTS functional_requirement_specialist_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION functional_requirement_specialist_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	functionalRequirementTitle TEXT;
	specialistTitle TEXT;
	roleTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into functionalRequirementTitle from functional_requirement where id = new.functional_requirement_id;
		select title into specialistTitle from man where id = new.specialist_id;
		select title into roleTitle from ctlg_functional_requirement_specialist_role where id = new.role_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('functional_requirement_title', functionalRequirementTitle, 'specialist_title', specialistTitle, 'role_title', roleTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(functionalRequirementTitle, ' ', specialistTitle, ' ', roleTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


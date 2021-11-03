-- функция триггер
DROP FUNCTION IF EXISTS company_man_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION company_man_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	companyTitle TEXT;
	manTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into companyTitle from task where id = new.company_id;
		select title into manTitle from man where id = new.man_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('company_title', companyTitle, 'man_title', manTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(companyTitle, ' ', manTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


-- функция триггер
DROP FUNCTION IF EXISTS legal_entity_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION legal_entity_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	companyTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into companyTitle from company where id = new.company_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'company_title', companyTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', companyTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


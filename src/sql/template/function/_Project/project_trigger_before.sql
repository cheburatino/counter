-- функция триггер
DROP FUNCTION IF EXISTS project_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION project_trigger_before() RETURNS trigger AS
$$
DECLARE
	clientTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN
        

        -- заполняем ref поля
		select title into clientTitle from client where id = new.client_id;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'client_title', clientTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', clientTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


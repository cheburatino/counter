-- функция триггер
DROP FUNCTION IF EXISTS technical_task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION technical_task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	contractTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into contractTitle from contract where id = new.contract_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'contract_title', contractTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', contractTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


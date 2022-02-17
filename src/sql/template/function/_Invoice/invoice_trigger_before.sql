-- функция триггер
DROP FUNCTION IF EXISTS invoice_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION invoice_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	technicalTaskTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into technicalTaskTitle from technical_task where id = new.technical_task_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'technical_task_title', technicalTaskTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', technicalTaskTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


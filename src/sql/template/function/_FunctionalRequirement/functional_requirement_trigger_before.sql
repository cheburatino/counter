-- функция триггер
DROP FUNCTION IF EXISTS functional_requirement_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION functional_requirement_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	analystTitle TEXT;
	requestTitle TEXT;
	digitalSolutionTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN
        

        -- заполняем ref поля
		select title into analystTitle from employee where id = new.analyst_id;
		select title into requestTitle from request where id = new.request_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'analyst_title', analystTitle, 'request_title', requestTitle, 'digital_solution_title', digitalSolutionTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', analystTitle, ' ', requestTitle, ' ', digitalSolutionTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


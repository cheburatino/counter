-- функция триггер
DROP FUNCTION IF EXISTS functional_requirement_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION functional_requirement_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	requestTitle TEXT;
	digitalSolutionTitle TEXT;
	systemTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_functional_requirement_state where id = new.state_id;
		select title into requestTitle from request where id = new.request_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into systemTitle from system where id = new.system_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'request_title', requestTitle, 'digital_solution_title', digitalSolutionTitle, 'system_title', systemTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', requestTitle, ' ', digitalSolutionTitle, ' ', systemTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


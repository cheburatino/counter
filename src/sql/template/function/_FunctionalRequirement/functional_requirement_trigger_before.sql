-- функция триггер
DROP FUNCTION IF EXISTS functional_requirement_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION functional_requirement_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	customerTitle TEXT;
	requestTitle TEXT;
	systemTitle TEXT;
	digitalSolutionTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_functional_requirement_state where id = new.state_id;
		select title into customerTitle from company where id = new.customer_id;
		select title into requestTitle from request where id = new.request_id;
		select title into systemTitle from system where id = new.system_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'customer_title', customerTitle, 'request_title', requestTitle, 'system_title', systemTitle, 'digital_solution_title', digitalSolutionTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', customerTitle, ' ', requestTitle, ' ', systemTitle, ' ', digitalSolutionTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


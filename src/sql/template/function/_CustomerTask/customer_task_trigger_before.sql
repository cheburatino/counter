-- функция триггер
DROP FUNCTION IF EXISTS customer_task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION customer_task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	digitalSolutionTitle TEXT;
	companyTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_customer_task_state where id = new.state_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into companyTitle from company where id = new.company_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'digital_solution_title', digitalSolutionTitle, 'company_title', companyTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', digitalSolutionTitle, ' ', companyTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


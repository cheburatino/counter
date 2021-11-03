-- функция триггер
DROP FUNCTION IF EXISTS digital_solution_customer_agent_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION digital_solution_customer_agent_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	digitalSolutionTitle TEXT;
	customerAgentTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into customerAgentTitle from man where id = new.customer_agent_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('digital_solution_title', digitalSolutionTitle, 'customer_agent_title', customerAgentTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(digitalSolutionTitle, ' ', customerAgentTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


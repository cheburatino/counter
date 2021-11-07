-- функция триггер
DROP FUNCTION IF EXISTS functional_requirement_customer_agent_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION functional_requirement_customer_agent_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	functionalRequirementTitle TEXT;
	customerAgentTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into functionalRequirementTitle from functional_requirement where id = new.functional_requirement_id;
		select title into customerAgentTitle from man where id = new.customer_agent_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('functional_requirement_title', functionalRequirementTitle, 'customer_agent_title', customerAgentTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(functionalRequirementTitle, ' ', customerAgentTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


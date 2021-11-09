-- функция триггер
DROP FUNCTION IF EXISTS system_customer_agent_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION system_customer_agent_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	systemTitle TEXT;
	customerAgentTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into systemTitle from system where id = new.system_id;
		select title into customerAgentTitle from man where id = new.customer_agent_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('system_title', systemTitle, 'customer_agent_title', customerAgentTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(systemTitle, ' ', customerAgentTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


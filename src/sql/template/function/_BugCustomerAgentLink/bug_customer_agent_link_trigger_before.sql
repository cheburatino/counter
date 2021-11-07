-- функция триггер
DROP FUNCTION IF EXISTS bug_customer_agent_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION bug_customer_agent_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	requestTitle TEXT;
	customerAgentTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into requestTitle from request where id = new.request_id;
		select title into customerAgentTitle from man where id = new.customer_agent_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('request_title', requestTitle, 'customer_agent_title', customerAgentTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(requestTitle, ' ', customerAgentTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


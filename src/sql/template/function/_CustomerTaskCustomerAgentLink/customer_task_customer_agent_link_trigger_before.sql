-- функция триггер
DROP FUNCTION IF EXISTS customer_task_customer_agent_link_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION customer_task_customer_agent_link_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	customerTaskTitle TEXT;
	customerAgentTitle TEXT;
	authorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into customerTaskTitle from customer_task where id = new.customer_task_id;
		select title into customerAgentTitle from man where id = new.customer_agent_id;
		select title into authorTitle from man where id = new.author_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('customer_task_title', customerTaskTitle, 'customer_agent_title', customerAgentTitle, 'author_title', authorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(customerTaskTitle, ' ', customerAgentTitle, ' ', authorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


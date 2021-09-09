-- функция триггер
DROP FUNCTION IF EXISTS system_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION system_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	rskTitle TEXT;
	customerTitle TEXT;
	customerAgentTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN
        

        -- заполняем ref поля
		select title into rskTitle from employee where id = new.rsk_id;
		select title into customerTitle from company where id = new.customer_id;
		select title into customerAgentTitle from man where id = new.customer_agent_id;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'rsk_title', rskTitle, 'customer_title', customerTitle, 'customer_agent_title', customerAgentTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', rskTitle, ' ', customerTitle, ' ', customerAgentTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


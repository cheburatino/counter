-- функция триггер
DROP FUNCTION IF EXISTS request_customer_agent_link_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION request_customer_agent_link_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


-- функция триггер
DROP FUNCTION IF EXISTS customer_task_customer_agent_link_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION customer_task_customer_agent_link_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;

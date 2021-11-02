-- функция триггер
DROP FUNCTION IF EXISTS digital_solution_customer_agent_link_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION digital_solution_customer_agent_link_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


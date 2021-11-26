-- функция триггер
DROP FUNCTION IF EXISTS functional_requirement_specialist_link_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION functional_requirement_specialist_link_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


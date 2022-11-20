-- функция триггер
DROP FUNCTION IF EXISTS sprint_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION sprint_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


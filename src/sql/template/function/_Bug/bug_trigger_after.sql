-- функция триггер
DROP FUNCTION IF EXISTS bug_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION bug_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


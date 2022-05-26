-- функция триггер
DROP FUNCTION IF EXISTS work_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION work_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


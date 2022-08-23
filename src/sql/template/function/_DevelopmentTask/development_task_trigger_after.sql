-- функция триггер
DROP FUNCTION IF EXISTS development_task_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION development_task_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


-- функция триггер
DROP FUNCTION IF EXISTS task_specialist_link_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION task_specialist_link_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


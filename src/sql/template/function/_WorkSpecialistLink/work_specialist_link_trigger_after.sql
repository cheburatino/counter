-- функция триггер
DROP FUNCTION IF EXISTS work_specialist_link_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION work_specialist_link_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


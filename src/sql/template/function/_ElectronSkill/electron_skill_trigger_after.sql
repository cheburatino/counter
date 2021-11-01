-- функция триггер
DROP FUNCTION IF EXISTS electron_skill_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION electron_skill_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


-- функция триггер
DROP FUNCTION IF EXISTS note_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION note_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


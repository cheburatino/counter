-- функция триггер
DROP FUNCTION IF EXISTS purpose_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION purpose_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


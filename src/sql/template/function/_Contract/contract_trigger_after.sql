-- функция триггер
DROP FUNCTION IF EXISTS contract_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION contract_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


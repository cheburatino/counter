-- функция триггер
DROP FUNCTION IF EXISTS payment_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION payment_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


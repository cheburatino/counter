-- функция триггер
DROP FUNCTION IF EXISTS invoice_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION invoice_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


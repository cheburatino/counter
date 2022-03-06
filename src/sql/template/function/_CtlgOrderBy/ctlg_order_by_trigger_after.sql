-- функция триггер
DROP FUNCTION IF EXISTS ctlg_order_by_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION ctlg_order_by_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


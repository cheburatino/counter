-- функция триггер
DROP FUNCTION IF EXISTS ctlg_time_type_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION ctlg_time_type_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


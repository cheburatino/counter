-- функция триггер
DROP FUNCTION IF EXISTS ctlg_digital_solution_specialist_role_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION ctlg_digital_solution_specialist_role_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


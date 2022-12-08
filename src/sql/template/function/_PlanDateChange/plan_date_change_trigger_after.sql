-- функция триггер
DROP FUNCTION IF EXISTS plan_date_change_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION plan_date_change_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


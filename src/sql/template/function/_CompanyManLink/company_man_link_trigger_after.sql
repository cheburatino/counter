-- функция триггер
DROP FUNCTION IF EXISTS company_man_link_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION company_man_link_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


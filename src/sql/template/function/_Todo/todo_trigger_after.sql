-- функция триггер
DROP FUNCTION IF EXISTS todo_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION todo_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


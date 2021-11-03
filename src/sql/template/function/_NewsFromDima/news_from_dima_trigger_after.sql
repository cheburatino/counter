-- функция триггер
DROP FUNCTION IF EXISTS news_from_dima_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION news_from_dima_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


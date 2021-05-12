-- функция триггер
DROP FUNCTION IF EXISTS client_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION client_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from project where client_id = new.id loop
 update project set updated_at=now() where id = r.id;
 end loop;
 for r in select * from internal_task where client_id = new.id loop
 update internal_task set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


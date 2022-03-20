-- функция триггер
DROP FUNCTION IF EXISTS sprint_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION sprint_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from model where sprint_id = new.id loop
 update model set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement where sprint_id = new.id loop
 update functional_requirement set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task where sprint_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


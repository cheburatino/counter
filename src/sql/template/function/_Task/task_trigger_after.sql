-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from company_man_link where company_id = new.id loop
 update company_man_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from time where task_id = new.id loop
 update time set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


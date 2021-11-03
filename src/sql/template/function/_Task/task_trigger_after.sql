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
 for r in select * from task_specialist_link where task_id = new.id loop
 update task_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from work_specialist_link where work_id = new.id loop
 update work_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from work_task_link where task_id = new.id loop
 update work_task_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from time where task_id = new.id loop
 update time set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


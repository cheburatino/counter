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
 for r in select * from plan_end_date_change where task_id = new.id loop
 update plan_end_date_change set updated_at=now() where id = r.id;
 end loop;
 for r in select * from customer_task where task_id = new.id loop
 update customer_task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from work where task_id = new.id loop
 update work set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        
		if coalesce(new.system_id, 0) != coalesce(old.system_id, 0)
		then
			update work set system_id = new.system_id where task_id = new.id;
		end if;
				

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


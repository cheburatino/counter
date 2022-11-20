-- функция триггер
DROP FUNCTION IF EXISTS work_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION work_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from time where work_id = new.id loop
 update time set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        
		-- хук из main.go
		if coalesce(new.worked_time, 0) != coalesce(old.worked_time, 0)
		then
            update task set worked_time = (select coalesce(sum(worked_time), 0) from work where task_id = new.task_id) where id = new.task_id;
        end if;
        --/ хук из main.go
				

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


-- функция триггер
DROP FUNCTION IF EXISTS digital_solution_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION digital_solution_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from development_task where digital_solution_id = new.id loop
 update development_task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from customer_task where digital_solution_id = new.id loop
 update customer_task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task where digital_solution_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from work where digital_solution_id = new.id loop
 update work set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


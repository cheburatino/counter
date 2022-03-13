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
 for r in select * from model where digital_solution_id = new.id loop
 update model set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement where digital_solution_id = new.id loop
 update functional_requirement set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task where digital_solution_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from customer_task where digital_solution_id = new.id loop
 update customer_task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution_specialist_link where digital_solution_id = new.id loop
 update digital_solution_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution_customer_agent_link where digital_solution_id = new.id loop
 update digital_solution_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from time where digital_solution_id = new.id loop
 update time set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


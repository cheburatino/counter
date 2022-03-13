-- функция триггер
DROP FUNCTION IF EXISTS system_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION system_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from request where system_id = new.id loop
 update request set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution where system_id = new.id loop
 update digital_solution set updated_at=now() where id = r.id;
 end loop;
 for r in select * from model where system_id = new.id loop
 update model set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement where system_id = new.id loop
 update functional_requirement set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task where system_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from customer_task where system_id = new.id loop
 update customer_task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from bug where system_id = new.id loop
 update bug set updated_at=now() where id = r.id;
 end loop;
 for r in select * from system_customer_agent_link where system_id = new.id loop
 update system_customer_agent_link set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


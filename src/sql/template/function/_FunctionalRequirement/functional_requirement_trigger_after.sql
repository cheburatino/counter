-- функция триггер
DROP FUNCTION IF EXISTS functional_requirement_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION functional_requirement_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from task where functional_requirement_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from customer_task where functional_requirement_id = new.id loop
 update customer_task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from bug where functional_requirement_id = new.id loop
 update bug set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement_customer_agent_link where functional_requirement_id = new.id loop
 update functional_requirement_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement_specialist_link where functional_requirement_id = new.id loop
 update functional_requirement_specialist_link set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


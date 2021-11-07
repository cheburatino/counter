-- функция триггер
DROP FUNCTION IF EXISTS customer_task_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION customer_task_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from customer_task_customer_agent_link where customer_task_id = new.id loop
 update customer_task_customer_agent_link set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


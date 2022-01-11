-- функция триггер
DROP FUNCTION IF EXISTS company_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION company_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from man where company_id = new.id loop
 update man set updated_at=now() where id = r.id;
 end loop;
 for r in select * from system where customer_id = new.id loop
 update system set updated_at=now() where id = r.id;
 end loop;
 for r in select * from request where customer_id = new.id loop
 update request set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution where customer_id = new.id loop
 update digital_solution set updated_at=now() where id = r.id;
 end loop;
 for r in select * from customer_task where customer_id = new.id loop
 update customer_task set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


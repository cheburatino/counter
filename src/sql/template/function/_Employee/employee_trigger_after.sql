-- функция триггер
DROP FUNCTION IF EXISTS employee_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION employee_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from request where rsk_id = new.id loop
 update request set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement where analyst_id = new.id loop
 update functional_requirement set updated_at=now() where id = r.id;
 end loop;
 for r in select * from system where rsk_id = new.id loop
 update system set updated_at=now() where id = r.id;
 end loop;
 for r in select * from time where specialist_id = new.id loop
 update time set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


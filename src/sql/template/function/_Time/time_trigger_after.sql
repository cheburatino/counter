-- функция триггер
DROP FUNCTION IF EXISTS time_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION time_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from digital_solution where modeling_estimate_id = new.id loop
 update digital_solution set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution where pre_realization_estimate_id = new.id loop
 update digital_solution set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution where realization_estimate_id = new.id loop
 update digital_solution set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


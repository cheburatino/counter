-- функция триггер
DROP FUNCTION IF EXISTS ctlg_model_state_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION ctlg_model_state_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from model where state_id = new.id loop
 update model set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


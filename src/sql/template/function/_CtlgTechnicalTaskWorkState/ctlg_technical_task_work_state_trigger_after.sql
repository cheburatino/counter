-- функция триггер
DROP FUNCTION IF EXISTS ctlg_technical_task_work_state_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION ctlg_technical_task_work_state_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from technical_task where work_state_id = new.id loop
 update technical_task set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


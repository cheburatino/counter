-- функция триггер
DROP FUNCTION IF EXISTS ctlg_plan_end_date_change_side_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION ctlg_plan_end_date_change_side_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from plan_end_date_change where side_id = new.id loop
 update plan_end_date_change set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


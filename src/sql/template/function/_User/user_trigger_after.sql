-- функция триггер
DROP FUNCTION IF EXISTS user_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION user_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене имени и аватарки обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.fullname != old.fullname OR new.avatar != old.avatar then
 for r in select * from ctlg_filter where user_table_id = new.id loop
 update ctlg_filter set updated_at=now() where id = r.id;
 end loop;
 for r in select * from ctlg_order_by where user_table_id = new.id loop
 update ctlg_order_by set updated_at=now() where id = r.id;
 end loop;
 for r in select * from contact where user_table_id = new.id loop
 update contact set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


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
 for r in select * from task where author_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task where director_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task where executor_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task where acceptor_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


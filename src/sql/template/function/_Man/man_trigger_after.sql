-- функция триггер
DROP FUNCTION IF EXISTS man_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION man_trigger_after() RETURNS trigger AS
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
 for r in select * from request where customer_agent_id = new.id loop
 update request set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution where rsk_id = new.id loop
 update digital_solution set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution where analyst_id = new.id loop
 update digital_solution set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution where client_agent_id = new.id loop
 update digital_solution set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution where team_lead_id = new.id loop
 update digital_solution set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement where analyst_id = new.id loop
 update functional_requirement set updated_at=now() where id = r.id;
 end loop;
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
 for r in select * from time where specialist_id = new.id loop
 update time set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


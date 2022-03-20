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
 for r in select * from development_task where responsible_id = new.id loop
 update development_task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task where executor_id = new.id loop
 update task set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task_specialist_link where specialist_id = new.id loop
 update task_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from task_specialist_link where author_id = new.id loop
 update task_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from system_customer_agent_link where customer_agent_id = new.id loop
 update system_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from system_customer_agent_link where author_id = new.id loop
 update system_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from request_customer_agent_link where customer_agent_id = new.id loop
 update request_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from request_customer_agent_link where author_id = new.id loop
 update request_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement_customer_agent_link where customer_agent_id = new.id loop
 update functional_requirement_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement_customer_agent_link where author_id = new.id loop
 update functional_requirement_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution_specialist_link where specialist_id = new.id loop
 update digital_solution_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution_specialist_link where author_id = new.id loop
 update digital_solution_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement_specialist_link where specialist_id = new.id loop
 update functional_requirement_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from functional_requirement_specialist_link where author_id = new.id loop
 update functional_requirement_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution_customer_agent_link where customer_agent_id = new.id loop
 update digital_solution_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from digital_solution_customer_agent_link where author_id = new.id loop
 update digital_solution_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from bug_customer_agent_link where customer_agent_id = new.id loop
 update bug_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from bug_customer_agent_link where author_id = new.id loop
 update bug_customer_agent_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from work_specialist_link where specialist_id = new.id loop
 update work_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from work_specialist_link where author_id = new.id loop
 update work_specialist_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from company_man_link where man_id = new.id loop
 update company_man_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from company_man_link where author_id = new.id loop
 update company_man_link set updated_at=now() where id = r.id;
 end loop;
 for r in select * from time where specialist_id = new.id loop
 update time set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


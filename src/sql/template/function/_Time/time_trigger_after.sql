-- функция триггер
DROP FUNCTION IF EXISTS time_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION time_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        
		-- хук из main.go
		if new.start_time isnull then new.start_time = now(); end if;

        if new.effort != old.effort or new.state_id != old.state_id
        then
            update work set worked_time = (select sum(effort) from time where work_id = new.work_id and state_id = 2) where id = new.work_id;
        end if;
        -- /хук из main.go
				

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


-- функция триггер
DROP FUNCTION IF EXISTS time_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION time_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	systemTitle TEXT;
	workTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_time_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into workTitle from work where id = new.work_id;
        
		-- хук из main.go
		if new.state_id != coalesce(old.state_id, 0) and new.state_id != 3 and ((select count(id) from time where id != new.id and work_id = new.work_id and state_id != 3 and deleted = false) > 0)
		then
			raise exception 'не должно быть двух времён в не завершённом статусе';
		end if;
		if new.system_id isnull then new.system_id = (select system_id from time where id = new.work_id); end if;
		if new.end_time < new.start_time then raise exception 'дата завершения не может быть меньше даты начала'; end if;
		if new.state_id = 3 and new.end_time isnull then raise exception 'невозможно завершить время если не указана дата завершения'; end if;
		if new.state_id = 3 and coalesce(new.effort, 0) = 0 then raise exception 'невозможно завершить время без полезной нагрузки'; end if;
				
        NEW.title = format('id: %s, время: %s', new.id, new.effort);
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'system_title', systemTitle, 'work_title', workTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', systemTitle, ' ', workTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


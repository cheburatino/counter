-- функция триггер
DROP FUNCTION IF EXISTS time_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION time_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	executorTitle TEXT;
	workTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_time_state where id = new.state_id;
		select title into executorTitle from man where id = new.executor_id;
		select title into workTitle from work where id = new.work_id;
        
		-- хук из main.go
		if new.end_time < new.start_time then raise exception 'дата завершения не может быть меньше даты начала'; end if;
		if new.state_id = 2 and new.end_time isnull then raise exception 'невозможно завершить время если не указана дата завершения'; end if;
				
        NEW.title = format('Статус: %s Начало: %s Завершение: %s Полезная нагрузка: %s', stateTitle, to_char(new.start_time, 'dd.mm - hh24:mi'), coalesce(to_char(new.end_time, 'dd.mm - hh24:mi'), 'не завершено'), new.effort);
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'executor_title', executorTitle, 'work_title', workTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', executorTitle, ' ', workTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


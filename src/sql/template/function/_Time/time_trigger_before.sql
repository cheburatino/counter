-- функция триггер
DROP FUNCTION IF EXISTS time_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION time_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_time_state where id = new.state_id;
        
		new.effort = (select sum(worked_time) from work where time_id = new.id and state_id = 3);	
			
        NEW.title = stateTitle || case when new.start_time notnull then format(', %s', to_char(new.start_time, 'dd.mm.yyyy')) else '' end || case when new.start_time notnull then format(', %s', to_char(new.start_time, 'HH24:MI')) else '' end || case when new.end_time notnull then format(' - %s', to_char(new.end_time, 'HH24:MI')) else '' end;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


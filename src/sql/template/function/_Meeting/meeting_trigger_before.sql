-- функция триггер
DROP FUNCTION IF EXISTS meeting_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION meeting_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	timeTitle TEXT;
	stateTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into timeTitle from time where id = new.time_id;
		select title into stateTitle from ctlg_meeting_state where id = new.state_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'time_title', timeTitle, 'state_title', stateTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', timeTitle, ' ', stateTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


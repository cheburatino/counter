-- функция триггер
DROP FUNCTION IF EXISTS meeting_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION meeting_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_meeting_state where id = new.state_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


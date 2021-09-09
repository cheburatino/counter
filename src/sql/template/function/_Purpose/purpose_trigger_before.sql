-- функция триггер
DROP FUNCTION IF EXISTS purpose_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION purpose_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	systemTitle TEXT;
	stateTitle TEXT;
	sprintTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN
        

        -- заполняем ref поля
		select title into systemTitle from system where id = new.system_id;
		select title into stateTitle from ctlg_purpose_state where id = new.state_id;
		select title into sprintTitle from sprint where id = new.sprint_id;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'system_title', systemTitle, 'state_title', stateTitle, 'sprint_title', sprintTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', systemTitle, ' ', stateTitle, ' ', sprintTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


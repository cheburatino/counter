-- функция триггер
DROP FUNCTION IF EXISTS completion_act_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION completion_act_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	technicalTaskTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_completion_act_state where id = new.state_id;
		select title into technicalTaskTitle from technical_task where id = new.technical_task_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'technical_task_title', technicalTaskTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', technicalTaskTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


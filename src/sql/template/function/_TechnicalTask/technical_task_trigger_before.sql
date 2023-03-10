-- функция триггер
DROP FUNCTION IF EXISTS technical_task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION technical_task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	workStateTitle TEXT;
	contractTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_technical_task_state where id = new.state_id;
		select title into workStateTitle from ctlg_technical_task_work_state where id = new.work_state_id;
		select title into contractTitle from contract where id = new.contract_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'work_state_title', workStateTitle, 'contract_title', contractTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', workStateTitle, ' ', contractTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


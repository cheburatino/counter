-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	typeTitle TEXT;
	stateTitle TEXT;
	systemTitle TEXT;
	workTimeSheetTitle TEXT;
	technicalTaskTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into typeTitle from ctlg_task_type where id = new.type_id;
		select title into stateTitle from ctlg_task_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into workTimeSheetTitle from work_time_sheet where id = new.work_time_sheet_id;
		select title into technicalTaskTitle from technical_task where id = new.technical_task_id;
        
		if new.state_id = 5 and new.fact_end_date isnull then raise exception 'невозможно завершить задачу без фактической даты завершения'; end if;
		if new.state_id = 5 and coalesce(new.worked_time, 0) = 0 then raise exception 'невозможно завершить задачу без затраченного времени'; end if;
				
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'type_title', typeTitle, 'state_title', stateTitle, 'system_title', systemTitle, 'work_time_sheet_title', workTimeSheetTitle, 'technical_task_title', technicalTaskTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', typeTitle, ' ', stateTitle, ' ', systemTitle, ' ', workTimeSheetTitle, ' ', technicalTaskTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


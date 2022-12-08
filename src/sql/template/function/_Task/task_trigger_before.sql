-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	typeTitle TEXT;
	stageTitle TEXT;
	stateTitle TEXT;
	systemTitle TEXT;
	workTimeSheetTitle TEXT;
	technicalTaskTitle TEXT;
	executorResponsibleTitle TEXT;
	customerResponsibleTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into typeTitle from ctlg_task_type where id = new.type_id;
		select title into stageTitle from ctlg_task_stage where id = new.stage_id;
		select title into stateTitle from ctlg_task_state where id = new.state_id;
		select title into systemTitle from system where id = new.system_id;
		select title into workTimeSheetTitle from work_time_sheet where id = new.work_time_sheet_id;
		select title into technicalTaskTitle from technical_task where id = new.technical_task_id;
		select title into executorResponsibleTitle from contact where id = new.executor_responsible_id;
		select title into customerResponsibleTitle from contact where id = new.customer_responsible_id;
        
		if new.state_id = 5 and new.fact_end_date isnull then raise exception 'невозможно завершить задачу без фактической даты завершения'; end if;
		if new.state_id = 5 and coalesce(new.worked_time, 0) = 0 then raise exception 'невозможно завершить задачу без затраченного времени'; end if;
				
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'type_title', typeTitle, 'stage_title', stageTitle, 'state_title', stateTitle, 'system_title', systemTitle, 'work_time_sheet_title', workTimeSheetTitle, 'technical_task_title', technicalTaskTitle, 'executor_responsible_title', executorResponsibleTitle, 'customer_responsible_title', customerResponsibleTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', typeTitle, ' ', stageTitle, ' ', stateTitle, ' ', systemTitle, ' ', workTimeSheetTitle, ' ', technicalTaskTitle, ' ', executorResponsibleTitle, ' ', customerResponsibleTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


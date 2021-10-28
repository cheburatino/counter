-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	digitalSolutionTitle TEXT;
	typeTitle TEXT;
	authorTitle TEXT;
	directorTitle TEXT;
	executorTitle TEXT;
	acceptorTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_dev_task_state where id = new.state;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
		select title into typeTitle from ctlg_task_type where id = new.type_id;
		select title into authorTitle from man where id = new.author_id;
		select title into directorTitle from man where id = new.director_id;
		select title into executorTitle from man where id = new.executor_id;
		select title into acceptorTitle from man where id = new.acceptor_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'digital_solution_title', digitalSolutionTitle, 'type_title', typeTitle, 'author_title', authorTitle, 'director_title', directorTitle, 'executor_title', executorTitle, 'acceptor_title', acceptorTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', digitalSolutionTitle, ' ', typeTitle, ' ', authorTitle, ' ', directorTitle, ' ', executorTitle, ' ', acceptorTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


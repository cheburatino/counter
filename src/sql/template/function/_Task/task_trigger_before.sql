-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	authorTitle TEXT;
	authorAvatar TEXT;
	directorTitle TEXT;
	directorAvatar TEXT;
	executorTitle TEXT;
	executorAvatar TEXT;
	acceptorTitle TEXT;
	acceptorAvatar TEXT;
	parentTaskTitle TEXT;
	digitalSolutionTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN
        

        -- заполняем ref поля
		select title into stateTitle from ctlg_dev_task_state where id = new.state;
		select title, avatar into authorTitle, authorAvatar from "user" where id = new.author_id;
		select title, avatar into directorTitle, directorAvatar from "user" where id = new.director_id;
		select title, avatar into executorTitle, executorAvatar from "user" where id = new.executor_id;
		select title, avatar into acceptorTitle, acceptorAvatar from "user" where id = new.acceptor_id;
		select title into parentTaskTitle from task where id = new.parent_task_id;
		select title into digitalSolutionTitle from digital_solution where id = new.digital_solution_id;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'author_title', authorTitle, 'author_avatar', authorAvatar, 'director_title', directorTitle, 'director_avatar', directorAvatar, 'executor_title', executorTitle, 'executor_avatar', executorAvatar, 'acceptor_title', acceptorTitle, 'acceptor_avatar', acceptorAvatar, 'parent_task_title', parentTaskTitle, 'digital_solution_title', digitalSolutionTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', authorTitle, ' ', directorTitle, ' ', executorTitle, ' ', acceptorTitle, ' ', parentTaskTitle, ' ', digitalSolutionTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


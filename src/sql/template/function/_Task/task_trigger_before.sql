-- функция триггер
DROP FUNCTION IF EXISTS task_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION task_trigger_before() RETURNS trigger AS
$$
DECLARE
	authorTitle TEXT;
	authorAvatar TEXT;
	directorTitle TEXT;
	directorAvatar TEXT;
	executorTitle TEXT;
	executorAvatar TEXT;
	acceptorTitle TEXT;
	acceptorAvatar TEXT;
	clientTitle TEXT;
	projectTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN
        

        -- заполняем ref поля
		select title, avatar into authorTitle, authorAvatar from "user" where id = new.author_id;
		select title, avatar into directorTitle, directorAvatar from "user" where id = new.director_id;
		select title, avatar into executorTitle, executorAvatar from "user" where id = new.executor_id;
		select title, avatar into acceptorTitle, acceptorAvatar from "user" where id = new.acceptor_id;
		select title into clientTitle from client where id = new.client_id;
		select title into projectTitle from project where id = new.project_id;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'author_title', authorTitle, 'author_avatar', authorAvatar, 'director_title', directorTitle, 'director_avatar', directorAvatar, 'executor_title', executorTitle, 'executor_avatar', executorAvatar, 'acceptor_title', acceptorTitle, 'acceptor_avatar', acceptorAvatar, 'client_title', clientTitle, 'project_title', projectTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', authorTitle, ' ', directorTitle, ' ', executorTitle, ' ', acceptorTitle, ' ', clientTitle, ' ', projectTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


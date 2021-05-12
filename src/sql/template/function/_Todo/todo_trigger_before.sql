-- функция триггер
DROP FUNCTION IF EXISTS todo_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION todo_trigger_before() RETURNS trigger AS
$$
DECLARE
	authorTitle TEXT;
	authorAvatar TEXT;
	performerTitle TEXT;
	performerAvatar TEXT;
	acceptorTitle TEXT;
	acceptorAvatar TEXT;

       searchTxtVar TEXT := '';
BEGIN
        

        -- заполняем ref поля
		select title, avatar into authorTitle, authorAvatar from "user" where id = new.author_id;
		select title, avatar into performerTitle, performerAvatar from "user" where id = new.performer_id;
		select title, avatar into acceptorTitle, acceptorAvatar from "user" where id = new.acceptor_id;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'author_title', authorTitle, 'author_avatar', authorAvatar, 'performer_title', performerTitle, 'performer_avatar', performerAvatar, 'acceptor_title', acceptorTitle, 'acceptor_avatar', acceptorAvatar));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', authorTitle, ' ', performerTitle, ' ', acceptorTitle, ' ', searchTxtVar);


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


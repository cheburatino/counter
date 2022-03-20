-- функция триггер
DROP FUNCTION IF EXISTS man_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION man_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	userTableTitle TEXT;
	userTableAvatar TEXT;
	companyTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title, avatar into userTableTitle, userTableAvatar from "user" where id = new.user_table_id;
		select title into companyTitle from company where id = new.company_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'user_table_title', userTableTitle, 'userTable_avatar', userTableAvatar, 'company_title', companyTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', userTableTitle, ' ', companyTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


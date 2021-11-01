-- функция триггер
DROP FUNCTION IF EXISTS man_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION man_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	companyTitle TEXT;
	userTableTitle TEXT;
	userTableAvatar TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into companyTitle from company where id = new.company_id;
		select title, avatar into userTableTitle, userTableAvatar from "user" where id = new.user_table_id;
        
        NEW.title = ltrim(rtrim(format('%s %s %s', new.last_name, new.first_name, new.middle_name)));
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'company_title', companyTitle, 'user_table_title', userTableTitle, 'userTable_avatar', userTableAvatar));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', companyTitle, ' ', userTableTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


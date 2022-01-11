-- функция триггер
DROP FUNCTION IF EXISTS bug_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION bug_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	customerTitle TEXT;
	systemTitle TEXT;
	functionalRequirementTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_bug_state where id = new.state_id;
		select title into customerTitle from company where id = new.customer_id;
		select title into systemTitle from system where id = new.system_id;
		select title into functionalRequirementTitle from functional_requirement where id = new.functional_requirement_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'customer_title', customerTitle, 'system_title', systemTitle, 'functional_requirement_title', functionalRequirementTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', customerTitle, ' ', systemTitle, ' ', functionalRequirementTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


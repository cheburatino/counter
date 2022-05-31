-- функция триггер
DROP FUNCTION IF EXISTS contract_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION contract_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	stateTitle TEXT;
	companyTitle TEXT;
	counterpartyTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN

        -- заполняем ref поля
		select title into stateTitle from ctlg_contract_state where id = new.state_id;
		select title into companyTitle from company where id = new.company_id;
		select title into counterpartyTitle from legal_entity where id = new.counterparty_id;
        
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'state_title', stateTitle, 'company_title', companyTitle, 'counterparty_title', counterpartyTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', stateTitle, ' ', companyTitle, ' ', counterpartyTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


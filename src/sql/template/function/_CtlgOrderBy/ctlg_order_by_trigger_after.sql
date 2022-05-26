-- функция триггер
DROP FUNCTION IF EXISTS ctlg_order_by_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION ctlg_order_by_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        

        

        
		if new.is_default != old.is_default and new.is_default = true
    	then
        	update ctlg_order_by set is_default = false where index = new.index and id != new.id;
   		end if;


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


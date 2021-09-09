-- функция триггер
DROP FUNCTION IF EXISTS counterparty_trigger_after() CASCADE;
CREATE OR REPLACE FUNCTION counterparty_trigger_after() RETURNS trigger AS
$$
DECLARE
        r record;
        jsonbEl      jsonb;
BEGIN
        
IF (TG_OP = 'UPDATE') THEN
-- при смене названия обновляем все ссылающиеся записи, чтобы там переписалось новое название
if new.title != old.title then
 for r in select * from invoice where payer_id = new.id loop
 update invoice set updated_at=now() where id = r.id;
 end loop;
 for r in select * from invoice where recipient_id = new.id loop
 update invoice set updated_at=now() where id = r.id;
 end loop;

 end if;
 end if;

        

        

    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


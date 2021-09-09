-- функция триггер
DROP FUNCTION IF EXISTS digital_solution_trigger_before() CASCADE;
CREATE OR REPLACE FUNCTION digital_solution_trigger_before() RETURNS trigger AS
$$
DECLARE
        r record;
	modelingEstimateTitle TEXT;
	preRealizationEstimateTitle TEXT;
	realizationEstimateTitle TEXT;
	sprintTitle TEXT;

       searchTxtVar TEXT := '';
BEGIN
        

        -- заполняем ref поля
		select title into modelingEstimateTitle from time where id = new.modeling_estimate_id;
		select title into preRealizationEstimateTitle from time where id = new.pre_realization_estimate_id;
		select title into realizationEstimateTitle from time where id = new.realization_estimate_id;
		select title into sprintTitle from sprint where id = new.sprint_id;
        -- заполняем options.title
        NEW.options = coalesce(OLD.options, '{}'::jsonb) || NEW.options || jsonb_build_object('title', jsonb_build_object('title', new.title, 'modeling_estimate_title', modelingEstimateTitle, 'pre_realization_estimate_title', preRealizationEstimateTitle, 'realization_estimate_title', realizationEstimateTitle, 'sprint_title', sprintTitle));
        -- заполняем search_text
        
        NEW.search_text = concat(new.title, ' ', modelingEstimateTitle, ' ', preRealizationEstimateTitle, ' ', realizationEstimateTitle, ' ', sprintTitle, ' ', searchTxtVar);

        


    RETURN NEW;
END;

$$ LANGUAGE plpgsql;


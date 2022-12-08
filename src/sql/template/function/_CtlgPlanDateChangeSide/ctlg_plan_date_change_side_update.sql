-- создание из-за кого изменилась плановая дата

DROP FUNCTION IF EXISTS ctlg_plan_date_change_side_update(params JSONB);
CREATE OR REPLACE FUNCTION ctlg_plan_date_change_side_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    ctlg_plan_date_change_sideRow     ctlg_plan_date_change_side%ROWTYPE;
    checkMsg    TEXT;
    result      JSONB;
    updateValue TEXT;
    queryStr    TEXT;
    
BEGIN

    
    -- проверика наличия id
    checkMsg = check_required_params(params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;
	

    
    

    if (params ->> 'id')::int = -1 then
        -- проверика наличия обязательных параметров
        checkMsg = check_required_params(params, ARRAY ['title']);
        IF checkMsg IS NOT NULL
        THEN
            RETURN checkMsg;
        END IF;
        

        EXECUTE ('INSERT INTO ctlg_plan_date_change_side (title, options) VALUES ($1, $2)  RETURNING *;')
		INTO ctlg_plan_date_change_sideRow
		USING
			(params ->> 'title')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE ctlg_plan_date_change_side SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO ctlg_plan_date_change_sideRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(ctlg_plan_date_change_sideRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN ctlg_plan_date_change_side_get_by_id(jsonb_build_object('id', ctlg_plan_date_change_sideRow.id));

END

$function$;
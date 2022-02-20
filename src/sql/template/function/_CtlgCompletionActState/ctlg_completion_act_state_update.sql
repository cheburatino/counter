-- создание статус акта

DROP FUNCTION IF EXISTS ctlg_completion_act_state_update(params JSONB);
CREATE OR REPLACE FUNCTION ctlg_completion_act_state_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    ctlg_completion_act_stateRow     ctlg_completion_act_state%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO ctlg_completion_act_state (title, options) VALUES ($1, $2)  RETURNING *;')
		INTO ctlg_completion_act_stateRow
		USING
			(params ->> 'title')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE ctlg_completion_act_state SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO ctlg_completion_act_stateRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(ctlg_completion_act_stateRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN ctlg_completion_act_state_get_by_id(jsonb_build_object('id', ctlg_completion_act_stateRow.id));

END

$function$;
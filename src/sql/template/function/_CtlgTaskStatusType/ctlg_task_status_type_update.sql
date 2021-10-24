-- создание тип статуса задачи

DROP FUNCTION IF EXISTS ctlg_task_status_type_update(params JSONB);
CREATE OR REPLACE FUNCTION ctlg_task_status_type_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    ctlg_task_status_typeRow     ctlg_task_status_type%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO ctlg_task_status_type (title, ctlg_table_name, options) VALUES ($1, $2, $3)  RETURNING *;')
		INTO ctlg_task_status_typeRow
		USING
			(params ->> 'title')::text,
			(params ->> 'ctlg_table_name')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['ctlg_table_name', 'ctlg_table_name', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE ctlg_task_status_type SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO ctlg_task_status_typeRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(ctlg_task_status_typeRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN ctlg_task_status_type_get_by_id(jsonb_build_object('id', ctlg_task_status_typeRow.id));

END

$function$;
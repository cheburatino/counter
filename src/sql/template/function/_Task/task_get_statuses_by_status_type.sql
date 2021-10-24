-- получаем список статусов по типу статуса

DROP FUNCTION IF EXISTS task_get_statuses_by_status_type_id(params JSONB);
CREATE OR REPLACE FUNCTION task_get_statuses_by_status_type_id(params JSONB)
    RETURNS JSONB
    LANGUAGE plpgsql
AS
$function$

DECLARE
    checkMsg            JSONB;
    statusTypeTableName TEXT;
    queryStr            TEXT;
    result              JSONB;

BEGIN
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, ARRAY ['status_type_id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    -- находим название таблицы статусов
    SELECT ctlg_table_name INTO statusTypeTableName FROM ctlg_task_status_type WHERE id = (params ->> 'status_type_id')::INT;
    raise notice 'statusTypeTableName: %', statusTypeTableName;

    -- записываем строки из таблицы выбранных статусов в result
    queryStr = concat('SELECT array_to_json(array_agg(', statusTypeTableName, '.*)) FROM ', statusTypeTableName);
    EXECUTE(queryStr)
        INTO result;

    RETURN jsonb_build_object('ok', TRUE, 'result', result);

END
$function$;
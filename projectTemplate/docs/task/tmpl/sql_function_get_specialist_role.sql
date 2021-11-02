-- получаем список статусов по типу статуса

DROP FUNCTION IF EXISTS task_get_specialist_role(params JSONB);
CREATE OR REPLACE FUNCTION task_get_specialist_role(params JSONB)
    RETURNS JSONB
    LANGUAGE plpgsql
AS
$function$

DECLARE
    checkMsg            JSONB;
    result              JSONB;

BEGIN
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, ARRAY ['user_id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from ctlg_task_role)
    select array_to_json(array_agg((t1.*))) into result from t1;

    RETURN jsonb_build_object('ok', TRUE, 'result', result);


END
$function$;
-- поиск из-за кого изменилась плановая дата завершения по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS ctlg_plan_end_date_change_side_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION ctlg_plan_end_date_change_side_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    ctlg_plan_end_date_change_sideRow         ctlg_plan_end_date_change_side%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('ctlg_plan_end_date_change_side_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from ctlg_plan_end_date_change_side where id = (params ->> 'id')::int)
 	select row_to_json(t1.*)::jsonb into result from t1;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
-- поиск цель по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS purpose_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION purpose_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    purposeRow         purpose%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('purpose_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from purpose where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as system_title from t1 left join system c on c.id = t1.system_id),
		t3 as (select t2.*, c.title as state_title from t2 left join ctlg_purpose_state c on c.id = t2.state_id),
		t4 as (select t3.*, c.title as sprint_title from t3 left join sprint c on c.id = t3.sprint_id)
 	select row_to_json(t4.*)::jsonb into result from t4;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
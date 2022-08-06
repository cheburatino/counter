-- поиск работа по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS work_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION work_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    workRow         work%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('work_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from work where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as state_title from t1 left join ctlg_work_state c on c.id = t1.state_id),
		t3 as (select t2.*, c.title as system_title from t2 left join system c on c.id = t2.system_id),
		t4 as (select t3.*, c.title as digital_solution_title from t3 left join digital_solution c on c.id = t3.digital_solution_id),
		t5 as (select t4.*, c.title as task_title from t4 left join task c on c.id = t4.task_id),
		t6 as (select t5.*, c.title as meeting_title from t5 left join meeting c on c.id = t5.meeting_id),
		t7 as (select t6.*, c.title as time_title from t6 left join time c on c.id = t6.time_id)
 	select row_to_json(t7.*)::jsonb into result from t7;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
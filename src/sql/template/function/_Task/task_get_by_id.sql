-- поиск задача по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS task_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION task_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    taskRow         task%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('task_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from task where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as state_title from t1 left join ctlg_task_state c on c.id = t1.state_id),
		t3 as (select t2.*, c.title as type_title from t2 left join ctlg_task_type c on c.id = t2.type_id),
		t4 as (select t3.*, c.title as system_title from t3 left join system c on c.id = t3.system_id),
		t5 as (select t4.*, c.title as digital_solution_title from t4 left join digital_solution c on c.id = t4.digital_solution_id),
		t6 as (select t5.*, c.title as development_task_title from t5 left join development_task c on c.id = t5.development_task_id),
		t7 as (select t6.*, c.title as executor_title from t6 left join man c on c.id = t6.executor_id)
 	select row_to_json(t7.*)::jsonb into result from t7;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
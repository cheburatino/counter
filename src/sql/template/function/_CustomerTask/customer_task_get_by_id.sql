-- поиск задача заказчика по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS customer_task_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION customer_task_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    customer_taskRow         customer_task%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('customer_task_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from customer_task where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as state_title from t1 left join ctlg_customer_task_state c on c.id = t1.state_id),
		t3 as (select t2.*, c.title as customer_title from t2 left join company c on c.id = t2.customer_id),
		t4 as (select t3.*, c.title as request_title from t3 left join request c on c.id = t3.request_id),
		t5 as (select t4.*, c.title as system_title from t4 left join system c on c.id = t4.system_id),
		t6 as (select t5.*, c.title as digital_solution_title from t5 left join digital_solution c on c.id = t5.digital_solution_id),
		t7 as (select t6.*, c.title as functional_requirement_title from t6 left join functional_requirement c on c.id = t6.functional_requirement_id),
		t8 as (select t7.*, c.title as bug_title from t7 left join bug c on c.id = t7.bug_id)
 	select row_to_json(t8.*)::jsonb into result from t8;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
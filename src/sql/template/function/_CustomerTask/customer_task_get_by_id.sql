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
		t3 as (select t2.*, c.title as digital_solution_title from t2 left join digital_solution c on c.id = t2.digital_solution_id),
		t4 as (select t3.*, c.title as company_title from t3 left join company c on c.id = t3.company_id),
		t5 as (select t4.*, c.title as author_title from t4 left join man c on c.id = t4.author_id)
 	select row_to_json(t5.*)::jsonb into result from t5;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
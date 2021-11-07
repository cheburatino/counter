-- поиск связь задачи заказчика и представителя заказчика по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS custotmer_task_customer_agent_link_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION custotmer_task_customer_agent_link_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    custotmer_task_customer_agent_linkRow         custotmer_task_customer_agent_link%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('custotmer_task_customer_agent_link_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from custotmer_task_customer_agent_link where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as custotmer_task_title from t1 left join custotmer_task c on c.id = t1.custotmer_task_id),
		t3 as (select t2.*, c.title as customer_agent_title from t2 left join man c on c.id = t2.customer_agent_id),
		t4 as (select t3.*, c.title as author_title from t3 left join man c on c.id = t3.author_id)
 	select row_to_json(t4.*)::jsonb into result from t4;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
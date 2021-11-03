-- поиск связь дела и задачи по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS work_task_link_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION work_task_link_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    work_task_linkRow         work_task_link%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('work_task_link_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from work_task_link where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as work_title from t1 left join work c on c.id = t1.work_id),
		t3 as (select t2.*, c.title as task_title from t2 left join task c on c.id = t2.task_id)
 	select row_to_json(t3.*)::jsonb into result from t3;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
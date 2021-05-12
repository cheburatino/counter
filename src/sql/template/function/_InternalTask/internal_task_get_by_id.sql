-- поиск внутренняя задача по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS internal_task_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION internal_task_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    internal_taskRow         internal_task%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('internal_task_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from internal_task where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as author_title from t1 left join "user" c on c.id = t1.author_id),
		t3 as (select t2.*, c.title as director_title from t2 left join "user" c on c.id = t2.director_id),
		t4 as (select t3.*, c.title as executor_title from t3 left join "user" c on c.id = t3.executor_id),
		t5 as (select t4.*, c.title as acceptor_title from t4 left join "user" c on c.id = t4.acceptor_id),
		t6 as (select t5.*, c.title as client_title from t5 left join client c on c.id = t5.client_id),
		t7 as (select t6.*, c.title as project_title from t6 left join project c on c.id = t6.project_id),
		t8 as (select t7.*, c.title as parent_task_title from t7 left join internal_task c on c.id = t7.parent_task_id)
 	select row_to_json(t8.*)::jsonb into result from t8;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
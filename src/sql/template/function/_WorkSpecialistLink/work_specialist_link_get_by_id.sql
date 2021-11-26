-- поиск участник дела по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS work_specialist_link_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION work_specialist_link_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    work_specialist_linkRow         work_specialist_link%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('work_specialist_link_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from work_specialist_link where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as work_title from t1 left join task c on c.id = t1.work_id),
		t3 as (select t2.*, c.title as specialist_title from t2 left join man c on c.id = t2.specialist_id),
		t4 as (select t3.*, c.title as author_title from t3 left join man c on c.id = t3.author_id),
		t5 as (select t4.*, c.title as role_title from t4 left join ctlg_work_specialist_role c on c.id = t4.role_id)
 	select row_to_json(t5.*)::jsonb into result from t5;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
-- получение списка задача
-- параметры:
-- deleted         type: bool - удаленные / существующие. Дефолт: false
-- order_by        type: string - поле для сортировки и направление сортировки. Например, orderBy: "id desc"
-- page            type: int - номер страницы. Дефолт: 1
-- per_page        type: int - количество записей на странице. Дефолт: 1000
-- search_text     type: string - текстовый поиск

DROP FUNCTION IF EXISTS task_list(params JSONB);
CREATE OR REPLACE FUNCTION task_list(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    result       JSON;
    condQueryStr TEXT;
    whereStr     TEXT;
    checkMsg     TEXT;
BEGIN

    checkMsg = check_required_params(params, ARRAY ['user_id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    

    -- сборка условия WHERE (where_str_build - функция из папки base)
    whereStr = where_str_build(params, 'doc', ARRAY [
        ['ilike', 'search_text', 'search_text'],
		['notQuoted', 'type_id', 'doc.type_id'],
		['notQuoted', 'stage_id', 'doc.stage_id'],
		['notQuoted', 'state_id', 'doc.state_id'],
		['notQuoted', 'system_id', 'doc.system_id'],
		['notQuoted', 'work_time_sheet_id', 'doc.work_time_sheet_id'],
		['notQuoted', 'technical_task_id', 'doc.technical_task_id'],
		['notQuoted', 'executor_responsible_id', 'doc.executor_responsible_id'],
		['notQuoted', 'customer_responsible_id', 'doc.customer_responsible_id']
    ]);

    

    -- финальная сборка строки с условиями выборки (build_query_part_for_list - функция из папки base)
    condQueryStr = '' || whereStr || build_query_part_for_list(params);

    EXECUTE ('
	with t1 as (select * from task as doc ' || condQueryStr || ')
 	select array_to_json(array_agg(t1.*)) from t1') into result;

    RETURN json_build_object('ok', TRUE, 'result', coalesce(result, '[]'));

END
$function$;





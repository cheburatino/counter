-- получение списка задача заказчика
-- параметры:
-- deleted         type: bool - удаленные / существующие. Дефолт: false
-- order_by        type: string - поле для сортировки и направление сортировки. Например, orderBy: "id desc"
-- page            type: int - номер страницы. Дефолт: 1
-- per_page        type: int - количество записей на странице. Дефолт: 1000
-- search_text     type: string - текстовый поиск

DROP FUNCTION IF EXISTS customer_task_list(params JSONB);
CREATE OR REPLACE FUNCTION customer_task_list(params JSONB)
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
		['notQuoted', 'state_id', 'doc.state_id'],
		['notQuoted', 'system_id', 'doc.system_id'],
		['notQuoted', 'digital_solution_id', 'doc.digital_solution_id'],
		['notQuoted', 'development_task_id', 'doc.development_task_id'],
		['notQuoted', 'responsible_id', 'doc.responsible_id']
    ]);

    -- добавляем в фильтр условия из where на клиенте
    if params->>'where_param' notnull
    then
        whereStr = format('%s and (%s)', whereStr, params->>'where_param');
    end if;

    -- финальная сборка строки с условиями выборки (build_query_part_for_list - функция из папки base)
    condQueryStr = '' || whereStr || build_query_part_for_list(params);

    EXECUTE ('
	with t1 as (select * from customer_task as doc ' || condQueryStr || ')
 	select array_to_json(array_agg(t1.*)) from t1') into result;

    RETURN json_build_object('ok', TRUE, 'result', coalesce(result, '[]'));

END
$function$;





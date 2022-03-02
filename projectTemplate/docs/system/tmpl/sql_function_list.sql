-- получение списка система
-- параметры:
-- deleted         type: bool - удаленные / существующие. Дефолт: false
-- order_by        type: string - поле для сортировки и направление сортировки. Например, orderBy: "id desc"
-- page            type: int - номер страницы. Дефолт: 1
-- per_page        type: int - количество записей на странице. Дефолт: 1000
-- search_text     type: string - текстовый поиск

DROP FUNCTION IF EXISTS system_list(params JSONB);
CREATE OR REPLACE FUNCTION system_list(params JSONB)
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

--     if params->>'type' notnull and (params->>'type')::text != '[]' then
--         whereStr = whereStr || format(' AND type = ANY(%s)', quote_literal(text_array_from_json((params->>'type')::jsonb)));
--     end if;

    

    -- сборка условия WHERE (where_str_build - функция из папки base)
    whereStr = where_str_build(params, 'doc', ARRAY [
        ['ilike', 'search_text', 'search_text'],
		['notQuoted', 'customer_id', 'doc.customer_id']
    ]);

    -- для admin ограничений нет
    if is_user_role((params->>'user_id')::int, '{admin}') is not true then
        -- для сотрудника выбираем только те объекты, к которым у него есть доступ
        whereStr = whereStr || format(' AND id = ANY(%s) ', quote_literal((select coalesce(array_agg(system_id), '{}') from system_customer_agent_link where customer_agent_id = (select id from man where user_table_id = (params->>'user_id')::int) and deleted=false)));
    end if;

    -- финальная сборка строки с условиями выборки (build_query_part_for_list - функция из папки base)
    condQueryStr = '' || whereStr || build_query_part_for_list(params);

    EXECUTE ('
	with t1 as (select * from system as doc ' || condQueryStr || ')
 	select array_to_json(array_agg(t1.*)) from t1') into result;

    RETURN json_build_object('ok', TRUE, 'result', coalesce(result, '[]'));

END
$function$;




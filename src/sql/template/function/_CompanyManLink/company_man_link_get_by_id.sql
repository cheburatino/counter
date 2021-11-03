-- поиск связь компании и человека по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS company_man_link_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION company_man_link_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    company_man_linkRow         company_man_link%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('company_man_link_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from company_man_link where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as company_title from t1 left join task c on c.id = t1.company_id),
		t3 as (select t2.*, c.title as man_title from t2 left join man c on c.id = t2.man_id),
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
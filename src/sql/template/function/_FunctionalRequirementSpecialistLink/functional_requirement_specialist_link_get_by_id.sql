-- поиск связь функционального требования и специалиста по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS functional_requirement_specialist_link_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION functional_requirement_specialist_link_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    functional_requirement_specialist_linkRow         functional_requirement_specialist_link%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('functional_requirement_specialist_link_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from functional_requirement_specialist_link where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as functional_requirement_title from t1 left join functional_requirement c on c.id = t1.functional_requirement_id),
		t3 as (select t2.*, c.title as specialist_title from t2 left join man c on c.id = t2.specialist_id),
		t4 as (select t3.*, c.title as role_title from t3 left join ctlg_functional_requirement_specialist_role c on c.id = t3.role_id),
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
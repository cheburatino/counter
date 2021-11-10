-- поиск контакт по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS man_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION man_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    manRow         man%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('man_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from man where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as company_title from t1 left join company c on c.id = t1.company_id),
		t3 as (select t2.*, c.title as user_table_title from t2 left join "user" c on c.id = t2.user_table_id)
 	select row_to_json(t3.*)::jsonb into result from t3;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
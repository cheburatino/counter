-- поиск фильтр по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS ctlg_filter_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION ctlg_filter_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    ctlg_filterRow         ctlg_filter%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('ctlg_filter_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from ctlg_filter where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as user_table_title from t1 left join "user" c on c.id = t1.user_table_id)
 	select row_to_json(t2.*)::jsonb into result from t2;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
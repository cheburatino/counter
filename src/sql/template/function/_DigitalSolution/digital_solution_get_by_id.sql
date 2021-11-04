-- поиск цифровое решение по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS digital_solution_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION digital_solution_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    digital_solutionRow         digital_solution%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('digital_solution_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from digital_solution where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as state_title from t1 left join ctlg_digital_solution_state c on c.id = t1.state_id),
		t3 as (select t2.*, c.title as customer_title from t2 left join company c on c.id = t2.customer_id),
		t4 as (select t3.*, c.title as system_title from t3 left join system c on c.id = t3.system_id)
 	select row_to_json(t4.*)::jsonb into result from t4;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
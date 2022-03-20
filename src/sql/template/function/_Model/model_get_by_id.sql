-- поиск модель по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS model_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION model_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    modelRow         model%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('model_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from model where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as type_title from t1 left join ctlg_model_type c on c.id = t1.type_id),
		t3 as (select t2.*, c.title as state_title from t2 left join ctlg_model_state c on c.id = t2.state_id),
		t4 as (select t3.*, c.title as system_title from t3 left join system c on c.id = t3.system_id),
		t5 as (select t4.*, c.title as digital_solution_title from t4 left join digital_solution c on c.id = t4.digital_solution_id),
		t6 as (select t5.*, c.title as sprint_title from t5 left join sprint c on c.id = t5.sprint_id)
 	select row_to_json(t6.*)::jsonb into result from t6;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
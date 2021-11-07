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
    manId int;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    select id into manId from man where user_table_id = (params ->> 'user_id')::int;

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('digital_solution_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    -- для admin ограничений нет
    if (params->>'user_id') notnull AND is_user_role((params->>'user_id')::int, '{admin}') is not true then
        -- проверяем что у пользователя есть доступ к объекту
        if (select count(*) from digital_solution_customer_agent_link where customer_agent_id = manId and digital_solution_id = (params->>'id')::int and deleted=false)::int = 0
            and (select count(*) from digital_solution_specialist_link where specialist_id = manId and digital_solution_id = (params->>'id')::int and deleted=false)::int = 0 then
            return jsonb_build_object('ok', false, 'message', 'нет прав доступа к объекту');
        end if;
    end if;

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
-- функция считает кол-во отработанного времени по цифровому решению

DROP FUNCTION IF EXISTS digital_solution_worked_time(params JSONB);
CREATE OR REPLACE FUNCTION digital_solution_worked_time(params JSONB)
    RETURNS JSONB
    LANGUAGE plpgsql
AS
$function$

DECLARE
    checkMsg JSONB;
    loopTaskId INT;
    loopTime INT;
    timeSum INT := 0;
    result JSONB;

BEGIN
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, ARRAY ['digital_solution_id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    FOR loopTaskId IN (SELECT id FROM task WHERE digital_solution_id = (params ->> 'digital_solution_id')::INT)
        LOOP
            RAISE NOTICE 'loopTaskId: %', loopTaskId;
            SELECT INTO loopTime sum(minute) FROM time WHERE task_id = loopTaskId AND type_id = 1;
            RAISE NOTICE 'loopTime: %', loopTime;
            timeSum = timeSum + loopTime;
            RAISE NOTICE 'timeSum: %', timeSum;
        END LOOP;

    result = jsonb_build_object('worked_time', timeSum);

    RETURN jsonb_build_object('ok', TRUE, 'result', result);

END
$function$;
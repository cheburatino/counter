-- меняет плановую дату завершения

DROP FUNCTION IF EXISTS task_change_plan_date(params jsonb);
CREATE OR REPLACE FUNCTION task_change_plan_date(params jsonb)
    RETURNS jsonb
    LANGUAGE plpgsql
AS
$function$

DECLARE
    checkMsg     jsonb;
    taskRow task%rowtype;
    createPlanChangeRes jsonb;
    direction varchar(20);

BEGIN

    checkMsg = check_required_params(params, array ['user_id', 'task_id', 'new_plan_date', 'reason', 'side_id', 'work_day_quantity']);
    if checkMsg notnull
    then
        return checkMsg;
    end if;

    -- получение данных по задаче
    select * into taskRow from task where id = (params->>'task_id')::int;
    if taskRow.id isnull then raise exception 'не найдена задача с id: % в task_change_plan_date', params->>'task_id'; end if;

    -- вычисление направления (проверка, что указывается не та же дата)
    if (params->>'new_plan_date')::date > taskRow.plan_end_date
    then
        direction = 'slowdown';
    elseif (params->>'new_plan_date')::date < taskRow.plan_end_date
    then
        direction = 'boost';
    elseif params->>'new_plan_date' isnull
        then raise exception 'не указана новая плановая дата завершения';
    else
        raise exception 'указана текущая плановая дата завершения задачи, нужна либо больше либо меньше';
    end if;

    -- проверка того, что функцию вызывает исполнитель, ответственный за задачу
    if (params->>'user_id')::int != (select user_table_id from contact where id = taskRow.executor_responsible_id)
    then
        raise exception 'менять плановую дату завершения задачи может только ответственный исполнитель';
    end if;

    -- создание записи таблице изменений плановых сроков
    createPlanChangeRes = plan_date_change_update(jsonb_build_object(
        'id', -1,
        'task_id', taskRow.id,
        'work_day_quantity', (params->>'work_day_quantity')::int,
        'old_plan_date', taskRow.plan_end_date,
        'new_plan_date', (params->>'new_plan_date')::timestamp,
        'author_id', (params->>'user_id')::int,
        'reason', params->>'reason',
        'side_id', (params->>'side_id')::int,
        'direction', direction
        ));
    if not (createPlanChangeRes->>'ok')::bool then raise exception 'ошибка создания записи в plan_date_change: %', createPlanChangeRes->>'message'; end if;

    update task set plan_end_date = (params->>'new_plan_date')::timestamp where id = taskRow.id;

    return createPlanChangeRes->'result';

END
$function$;

-- меняет плановую дату завершения и сохраняет об этом запись в таблице plan_end_date_change

DROP FUNCTION IF EXISTS task_change_plan_end_date(params jsonb);
CREATE OR REPLACE FUNCTION task_change_plan_end_date(params jsonb)
    RETURNS jsonb
    LANGUAGE plpgsql
AS
$function$

DECLARE
    checkMsg            jsonb;
    taskRow             task%rowtype;
    createPlanChangeRes jsonb;
    direction           varchar(20);
    taskUpdateRes       jsonb;

BEGIN

    checkMsg = check_required_params(params, array ['user_id', 'task_id', 'new_plan_end_date', 'reason', 'side_id', 'work_day_quantity']);
    if checkMsg notnull
    then
        return checkMsg;
    end if;

    -- получение данных по задаче
    select * into taskRow from task where id = (params->>'task_id')::int;
    if taskRow.id isnull then raise exception 'не найдена задача с id: % в task_change_plan_end_date', params->>'task_id'; end if;

    -- проверка наличия плановой даты завершения в задаче
    if taskRow.plan_end_date isnull then raise exception 'плановая дата завершения не установлена, поэтому её нельзя изменить'; end if;

    -- вычисление направления (проверка, что указывается не та же дата)
    if params->>'new_plan_end_date' isnull
        then raise exception 'не указана новая плановая дата завершения';
    end if;

    if (params->>'new_plan_end_date')::date > taskRow.plan_end_date
    then
        direction = 'slowdown';
    elseif (params->>'new_plan_end_date')::date < taskRow.plan_end_date
    then
        direction = 'boost';
    else
        raise exception 'указана текущая плановая дата завершения задачи, нужна либо больше либо меньше';
    end if;

    -- проверка того, что функцию вызывает исполнитель, ответственный за задачу
    if (params->>'user_id')::int != (select user_table_id from contact where id = taskRow.executor_responsible_id)
    then
        raise exception 'менять плановую дату завершения задачи может только ответственный исполнитель';
    end if;

    -- создание записи таблице изменений плановых сроков
    createPlanChangeRes = plan_end_date_change_update(jsonb_build_object(
        'id', -1,
        'task_id', taskRow.id,
        'work_day_quantity', (params->>'work_day_quantity')::int,
        'old_plan_end_date', taskRow.plan_end_date,
        'new_plan_end_date', (params->>'new_plan_end_date')::timestamp,
        'author_id', (params->>'user_id')::int,
        'reason', params->>'reason',
        'side_id', (params->>'side_id')::int,
        'direction', direction
        ));
    if not (createPlanChangeRes->>'ok')::bool then raise exception 'ошибка создания записи в plan_end_date_change: %', createPlanChangeRes->>'message'; end if;

    update task set plan_end_date = (params->>'new_plan_end_date')::timestamp where id = taskRow.id;

    taskUpdateRes = task_update(jsonb_build_object(
        'id', taskRow.id,
        'plan_end_date', (params->>'new_plan_end_date')::timestamp
        ));

    return createPlanChangeRes->'result';

END
$function$;

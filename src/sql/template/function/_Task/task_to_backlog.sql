-- смена этапа на backlog

drop function if exists task_to_backlog(params jsonb);
create or replace function task_to_backlog(params jsonb)
    returns jsonb
    language plpgsql
as
$function$

declare
    checkMsg jsonb;
    taskRow task%rowtype;
    taskUpdateRes jsonb;

begin
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, array ['id', 'user_id']);
    if checkMsg notnull
    then
        return checkMsg;
    end if;

    -- получение данных и проверки по задаче
    -- стандартные проверки
    select * into taskRow from task where id = (params->>'id')::int;
    if taskRow.id isnull then raise exception 'не найдена задача с id: %', params->>'id'; end if;
    if taskRow.deleted = true then raise exception 'задача с id: % удалена', params->>'id'; end if;
    if taskRow.state_id != 1 then raise exception 'нельзя менять этап задачи если статус не "В порядке"'; end if;
    -- проверки для этапа
    if taskRow.stage_id != 1 then raise exception 'в бэклог можно переводить задачи только из этапа "Черновик"'; end if;
    if taskRow.description isnull or taskRow.description in ('', ' ') then raise exception 'нельзя переводить задачи в бэклог без описания'; end if;


    taskUpdateRes = task_update(jsonb_build_object(
        'id', taskRow.id,
        'stage_id', 2,
        'user_id', (params->>'user_id')::int
        ));
    if not (taskUpdateRes->>'ok')::bool then raise exception 'ошибка task_update при обновлении задачи: %', taskUpdateRes->>'message'; end if;

    return jsonb_build_object('ok', true, 'result', taskUpdateRes);

end
$function$;
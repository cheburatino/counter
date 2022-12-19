-- создание задачи

drop function if exists task_create(params jsonb);
create or replace function task_create(params jsonb)
    returns jsonb
    language plpgsql
as
$function$

declare
    checkMsg jsonb;
    taskUpdateRes jsonb;

begin
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, array ['title', 'system_id', 'user_id']);
    if checkMsg notnull
    then
        return checkMsg;
    end if;

    taskUpdateRes = task_update(jsonb_build_object(
        'id', -1,
        'title', params->>'title',
        'system_id', (params->>'system_id')::int,
        'user_id', (params->>'user_id')::int
        ));
    if not (taskUpdateRes->>'ok')::bool then raise exception 'ошибка task_update при создании задачи: %', taskUpdateRes->>'message'; end if;

    return jsonb_build_object('ok', true, 'result', taskUpdateRes);

end
$function$;
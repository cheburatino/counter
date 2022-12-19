-- функция находит время на паузе по работе (должно быть только 1), записывает время завершения меняет статус на "Завершено"

drop function if exists work_counter_create(params jsonb);
create or replace function work_counter_create(params jsonb)
    returns jsonb
    language plpgsql
as
$function$

declare
    checkMsg jsonb;
    timeRow time%rowtype;
    updateRes jsonb;

begin
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, array ['user_id', 'work_id']);
    if checkMsg notnull
    then
        return checkMsg;
    end if;

    -- проверяем наличие активного времени
    select * into timeRow from time where work_id = (params->>'work_id')::int and state_id in (1, 2) and deleted = false;
    if timeRow notnull then raise exception 'уже существует активное время: id%', timeRow.id; end if;

    -- проверка доступа
    if (params->>'user_id')::int != 1 then raise exception 'у вас нет прав завершать время работы'; end if;

    -- создаём время
    updateRes = time_update(jsonb_build_object(
            'id', -1,
            'work_id', (params->>'work_id')::int,
            'system_id', (params->>'system_id')::int,
            'start_time', now(),
            'state_id', 1
        ));
    if not (updateRes->>'ok')::bool then raise exception 'Ошибка создания счётчика в work_counter_create: %', updateRes->>'message'; end if;

    return jsonb_build_object('ok', true, 'result', updateRes);

end
$function$;

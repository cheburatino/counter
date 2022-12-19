-- функция находит время на паузе по работе (должно быть только 1), записывает время завершения меняет статус на "Завершено"

drop function if exists time_counter_confirm(params jsonb);
create or replace function time_counter_confirm(params jsonb)
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

    -- находим время на паузе
    select * into timeRow from time where work_id = (params->>'work_id')::int and state_id = 2 and deleted = false;
    if timeRow isnull then raise exception 'timeRow isnull: %', timeRow; end if;

    -- проверка доступа
    if (params->>'user_id')::int != 1 then raise exception 'у вас нет прав завершать время работы'; end if;

    -- записываем время завершения
    updateRes = time_update(jsonb_build_object(
            'id', timeRow.id,
            'work_id', timeRow.work_id,
            'end_time', now(),
            'state_id', 3,
            'description', (params->>'description')::text
        ));
    if not (updateRes->>'ok')::bool then raise exception 'Ошибка завершения счётчика в time_counter_confirm: %', updateRes->>'message'; end if;

    return jsonb_build_object('ok', true, 'result', updateRes);

end
$function$;

-- функция находит активное время по работе (должно быть только 1), записывает полезную нагрузку и меняет статус на "На паузе"

drop function if exists time_counter_pause(params jsonb);
create or replace function time_counter_pause(params jsonb)
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

    -- находим активное время
    select * into timeRow from time where work_id = (params->>'work_id')::int and state_id = 1 and deleted = false;
    if timeRow isnull then raise exception 'timeRow isnull: %', timeRow; end if;


    --     raise exception '(EXTRACT(EPOCH FROM now() at time zone ''UTC'') - EXTRACT(EPOCH FROM timeRow.counter_start_time)) / 60): %', (EXTRACT(EPOCH FROM (now() - age(now() at time zone 'UTC', now()))) - EXTRACT(EPOCH FROM timeRow.start_time)) / 60;

    -- проверка доступа
    if (params->>'user_id')::int != 1 then raise exception 'у вас нет прав останавливать время работы'; end if;

    -- если счётчик ставится на паузу впервые, полезная нагрузка effort высчитывается с момента начала start_time до момента паузы
    if timeRow.counter_start_time isnull then
        updateRes = time_update(jsonb_build_object(
                'id', timeRow.id,
                'work_id', timeRow.work_id,
                'effort', coalesce((EXTRACT(EPOCH FROM (now() - age(now() at time zone 'UTC', now()))) - EXTRACT(EPOCH FROM timeRow.start_time)) / 60, 0) + timeRow.effort,
                'state_id', 2
            ));
        if not (updateRes->>'ok')::bool then raise exception 'Ошибка в попытке остановить счётчик в work_counter_continue: %', updateRes->>'message'; end if;
    end if;

    -- если счётчик был на паузе до этого, полезная нагрузка effort высчитывается из суммы времени с момента запуска counter_start_time и предыдущего значения effort
    if timeRow.counter_start_time notnull then
        updateRes = time_update(jsonb_build_object(
                'id', timeRow.id,
                'work_id', timeRow.work_id,
                'effort', ((EXTRACT(EPOCH FROM (now() - age(now() at time zone 'UTC', now()))) - EXTRACT(EPOCH FROM timeRow.counter_start_time)) / 60) + timeRow.effort,
                'state_id', 2
            ));
        if not (updateRes->>'ok')::bool then raise exception 'Ошибка остановки счётчика в time_counter_pause: %', updateRes->>'message'; end if;
    end if;

    -- в результате возвращаем сущность времени, в которой изменялись данные
    return jsonb_build_object('ok', true, 'result', updateRes);

end
$function$;

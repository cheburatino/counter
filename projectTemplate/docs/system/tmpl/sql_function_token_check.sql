-- проверка токена при обработке запроса от внешней системы

drop function if exists system_token_check(params jsonb);
create or replace function system_token_check(params jsonb)
    returns jsonb
    language plpgsql
as
$function$

declare
    checkMsg jsonb;
    systemRow system%rowtype;
    tokenParam char(30) := params->>'token';

begin
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, array ['token']);
    if checkMsg notnull
    then
        return checkMsg;
    end if;

--     if tokenParam isnull then raise exception 'tokenParam isnull'; end if;

    select * into systemRow from system where token = tokenParam;
    if systemRow isnull then raise exception 'не найдена система с токеном: %', tokenParam; end if;
    if systemRow.deleted = true then raise exception 'system is deleted, send letter to stanislav@i-electron.ru'; end if;

    return jsonb_build_object('ok', true, 'result', systemRow);

end
$function$;
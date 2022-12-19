-- описание функции и ключевых моментов

drop function if exists function_name(params jsonb);
create or replace function function_name(params jsonb)
    returns jsonb
    language plpgsql
as
$function$

declare
    checkMsg jsonb;

begin
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, array ['проверяемые параметры функции']);
    if checkMsg notnull
    then
        return checkMsg;
    end if;

    return jsonb_build_object('ok', true, 'result', 'done');

end
$function$;
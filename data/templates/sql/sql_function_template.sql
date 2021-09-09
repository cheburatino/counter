-- описание финукции и ключевых моментов

DROP FUNCTION IF EXISTS function_name(params JSONB);
CREATE OR REPLACE FUNCTION function_name(params JSONB)
    RETURNS JSONB
    LANGUAGE plpgsql
AS
$function$

DECLARE
    checkMsg JSONB;

    result JSONB;

BEGIN
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, ARRAY ['проверяемые параметры функции']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    RETURN jsonb_build_object('ok', TRUE, 'result', );

END
$function$;
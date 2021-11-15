-- описание финукции и ключевых моментов

DROP FUNCTION IF EXISTS request_change_system_sequence(params JSONB);
    CREATE OR REPLACE FUNCTION request_change_system_sequence(params JSONB)
    RETURNS JSONB
    LANGUAGE plpgsql
AS
$function$

DECLARE
    checkMsg JSONB;
    requestRow request%RowType;
--     sequenceNumber int := (params->>'sequence_number');
    loopSequenceNumber int;
    result JSONB;

BEGIN
    -- проверка наличия необходимых параметров
    checkMsg = check_required_params(params, ARRAY ['request_id', 'sequence_number']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    select * into requestRow from request where id = (params->>'request_id')::int;

    if requestRow.system_sequence isnull
    then
        return jsonb_build_object('ok', false, 'message', 'у запроса "%s" нет номера номера последовательности (system_sequence)', requestRow.title);
    end if;

    if params->>'sequence_number' = 'remove'
    then
        update request set system_sequence = system_sequence - 1 where system_id = requestRow.system_id and system_sequence > requestRow.system_sequence;
    end if;

    if (params->>'sequence_number')::int > requestRow.system_sequence and
       (select count(*) from request where system_sequence = (params->>'sequence_number')::int) > 0
    then
        raise notice 'step 1';
        update request set system_sequence = system_sequence - 1 where system_id = requestRow.system_id and system_sequence <= (params->>'sequence_number')::int and system_sequence > requestRow.system_sequence and id != requestRow.id;
    end if;

    if (params->>'sequence_number')::int < requestRow.system_sequence and
       (select count(*) from request where system_sequence = (params->>'sequence_number')::int) > 0
    then
        raise notice 'step 1';
        update request set system_sequence = system_sequence + 1 where system_id = requestRow.system_id and system_sequence >= (params->>'sequence_number')::int and system_sequence < requestRow.system_sequence and id != requestRow.id;
    end if;

    RETURN jsonb_build_object('ok', TRUE, 'result', 'ok');

END
$function$;
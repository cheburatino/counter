-- поиск встреча по id
-- параметры:
-- id       type: int

DROP FUNCTION IF EXISTS meeting_get_by_id(params JSONB);
CREATE OR REPLACE FUNCTION meeting_get_by_id(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    meetingRow         meeting%Rowtype;
    checkMsg               TEXT;
    result                 jsonb;
BEGIN

    -- проверика наличия id
    checkMsg = check_required_params_with_func_name('meeting_get_by_id', params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;

    with t1 as (select * from meeting where id = (params ->> 'id')::int),
		t2 as (select t1.*, c.title as time_title from t1 left join time c on c.id = t1.time_id),
		t3 as (select t2.*, c.title as state_title from t2 left join ctlg_meeting_state c on c.id = t2.state_id)
 	select row_to_json(t3.*)::jsonb into result from t3;

    -- случай когда записи с таким id не найдено
    IF result ->> 'id' ISNULL
    THEN
        RETURN json_build_object('ok', FALSE, 'message', 'not found');
    END IF;

    RETURN json_build_object('ok', TRUE, 'result', result);

END

$function$;
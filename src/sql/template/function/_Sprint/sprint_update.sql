-- создание спринт

DROP FUNCTION IF EXISTS sprint_update(params JSONB);
CREATE OR REPLACE FUNCTION sprint_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    sprintRow     sprint%ROWTYPE;
    checkMsg    TEXT;
    result      JSONB;
    updateValue TEXT;
    queryStr    TEXT;
    
BEGIN

    
    -- проверика наличия id
    checkMsg = check_required_params(params, ARRAY ['id']);
    IF checkMsg IS NOT NULL
    THEN
        RETURN checkMsg;
    END IF;
	

    
    
    
    
    

    if (params ->> 'id')::int = -1 then
        -- проверика наличия обязательных параметров
        checkMsg = check_required_params(params, ARRAY ['title']);
        IF checkMsg IS NOT NULL
        THEN
            RETURN checkMsg;
        END IF;
        

        EXECUTE ('INSERT INTO sprint (title, start_date, end_date, target, options) VALUES ($1, $2, $3, $4, $5)  RETURNING *;')
		INTO sprintRow
		USING
			(params ->> 'title')::text,
			(params ->> 'start_date')::timestamp,
			(params ->> 'end_date')::timestamp,
			(params ->> 'target')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['start_date', 'start_date', 'timestamp'],
			['end_date', 'end_date', 'timestamp'],
			['target', 'target', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE sprint SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO sprintRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(sprintRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN sprint_get_by_id(jsonb_build_object('id', sprintRow.id));

END

$function$;
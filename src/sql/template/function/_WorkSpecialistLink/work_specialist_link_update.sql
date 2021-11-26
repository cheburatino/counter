-- создание участник дела

DROP FUNCTION IF EXISTS work_specialist_link_update(params JSONB);
CREATE OR REPLACE FUNCTION work_specialist_link_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    work_specialist_linkRow     work_specialist_link%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO work_specialist_link (work_id, specialist_id, description, author_id, role_id, options) VALUES ($1, $2, $3, $4, $5, $6)  ON CONFLICT (work_id, specialist_id) DO UPDATE SET options=$6, deleted=false, description=$3 RETURNING *;')
		INTO work_specialist_linkRow
		USING
			(params ->> 'work_id')::int,
			(params ->> 'specialist_id')::int,
			(params ->> 'description')::text,
			(params ->> 'author_id')::int,
			(params ->> 'role_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['work_id', 'work_id', 'number'],
			['specialist_id', 'specialist_id', 'number'],
			['description', 'description', 'text'],
			['author_id', 'author_id', 'number'],
			['role_id', 'role_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE work_specialist_link SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO work_specialist_linkRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(work_specialist_linkRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN work_specialist_link_get_by_id(jsonb_build_object('id', work_specialist_linkRow.id));

END

$function$;
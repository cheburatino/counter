-- создание Тудушка

DROP FUNCTION IF EXISTS todo_update(params JSONB);
CREATE OR REPLACE FUNCTION todo_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    todoRow     todo%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO todo (title, state, description, author_id, performer_id, acceptor_id, options) VALUES ($1, $2, $3, $4, $5, $6, $7)  RETURNING *;')
		INTO todoRow
		USING
			(params ->> 'title')::text,
			(params ->> 'state')::text,
			(params ->> 'description')::text,
			(params ->> 'author_id')::int,
			(params ->> 'performer_id')::int,
			(params ->> 'acceptor_id')::int,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['state', 'state', 'text'],
			['description', 'description', 'text'],
			['author_id', 'author_id', 'number'],
			['performer_id', 'performer_id', 'number'],
			['acceptor_id', 'acceptor_id', 'number'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE todo SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO todoRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(todoRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN todo_get_by_id(jsonb_build_object('id', todoRow.id));

END

$function$;
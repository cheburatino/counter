-- создание новость от Димы

DROP FUNCTION IF EXISTS news_from_dima_update(params JSONB);
CREATE OR REPLACE FUNCTION news_from_dima_update(params JSONB)
    RETURNS JSON
    LANGUAGE plpgsql
AS
$function$

DECLARE
    news_from_dimaRow     news_from_dima%ROWTYPE;
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
        

        EXECUTE ('INSERT INTO news_from_dima (title, familiarized, description, file, image, conclusion, options) VALUES ($1, $2, $3, $4, $5, $6, $7)  RETURNING *;')
		INTO news_from_dimaRow
		USING
			(params ->> 'title')::text,
			coalesce((params ->> 'familiarized')::bool, false)::bool,
			(params ->> 'description')::text,
			(params -> 'file')::jsonb,
			(params -> 'image')::jsonb,
			(params ->> 'conclusion')::text,
			coalesce(params -> 'options', '{}')::jsonb;

        

    else
        updateValue = '' || update_str_from_json(params, ARRAY [
			['title', 'title', 'text'],
			['familiarized', 'familiarized', 'bool'],
			['description', 'description', 'text'],
			['file', 'file', 'jsonb'],
			['image', 'image', 'jsonb'],
			['conclusion', 'conclusion', 'text'],
            ['options', 'options', 'jsonb'],
            ['deleted', 'deleted', 'bool']
            ]);

        queryStr = concat('UPDATE news_from_dima SET ', updateValue, ' WHERE id=', params ->> 'id', ' RETURNING *;');

        EXECUTE (queryStr)
            INTO news_from_dimaRow;

        -- случай когда записи с таким id не найдено
        IF row_to_json(news_from_dimaRow) ->> 'id' ISNULL
        THEN
            RETURN json_build_object('ok', FALSE, 'message', 'wrong id');
        END IF;

    end if;

    

    RETURN news_from_dima_get_by_id(jsonb_build_object('id', news_from_dimaRow.id));

END

$function$;
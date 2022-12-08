-- сохраняет изменения в поле history

DROP FUNCTION IF EXISTS task_save_history(params jsonb);
CREATE OR REPLACE FUNCTION task_save_history(params jsonb)
    RETURNS jsonb
    LANGUAGE plpgsql
AS
$function$

DECLARE
    checkMsg     jsonb;
    updateParams jsonb := params->'update_params';
    userFullName varchar(100);
    historyParam jsonb;
    taskRow task%rowtype;

BEGIN

    checkMsg = check_required_params(params, array ['update_params']);
    if checkMsg notnull
    then
        return checkMsg;
    end if;

    -- получение фио пользователя
    select fullname into userFullName from "user" where id = (updateParams->>'user_id')::int;

    -- запись о создании
    if (updateParams->>'id')::int = -1
    then
        historyParam = '[]' || jsonb_build_object(
                'datetime', now(),
                'type', 'create',
                'user_id', (updateParams->>'user_id')::int,
                'user_full_name', userFullName,
                'icon', (select icon from ctlg_history_type where title = 'create' and entity = 'task'),
                'color', (select color from ctlg_history_type where title = 'create' and entity = 'task')
            );

    -- запись обновлений существующей задачи
    else if (updateParams->>'id')::int != -1
    then
        select * into taskRow from task where id = (updateParams->>'id')::int;
        historyParam = taskRow.history;

        if (updateParams->>'state_id')::int != taskRow.state_id
        then
            historyParam = historyParam || jsonb_build_object(
                    'datetime', now(),
                    'type', 'state',
                    'user_id', (updateParams->>'user_id')::int,
                    'user_full_name', userFullName,
                    'old_value', (select title from ctlg_task_state where id = taskRow.state_id),
                    'new_value', (select title from ctlg_task_state where id = (updateParams->>'state_id')::int),
                    'icon', (select icon from ctlg_history_type where title = 'state' and entity = 'task'),
                    'color', (select color from ctlg_history_type where title = 'state' and entity = 'task')
                );
        end if;

        if updateParams->>'title' != taskRow.title
        then historyParam = historyParam || jsonb_build_object(
                'datetime', now(),
                'type', 'title',
                'user_id', (updateParams->>'user_id')::int,
                'user_full_name', userFullName,
                'old_value', taskRow.title,
                'new_value', updateParams->>'title',
                'icon', (select icon from ctlg_history_type where title = 'title' and entity = 'task'),
                'color', (select color from ctlg_history_type where title = 'title' and entity = 'task')
            );
        end if;
    end if;
    end if;

    raise notice '%', historyParam;
    return historyParam;

END
$function$;

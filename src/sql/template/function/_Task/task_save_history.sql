-- сохраняет изменения в поле history

DROP FUNCTION IF EXISTS task_save_history(params jsonb);
CREATE OR REPLACE FUNCTION task_save_history(params jsonb)
    RETURNS jsonb
    LANGUAGE plpgsql
AS
$function$

DECLARE
    checkMsg     jsonb;
    userFullName varchar(100);
    historyParam jsonb;
    taskRow task%rowtype;
    testTaskRow task%rowtype;

BEGIN

--     checkMsg = check_required_params(params, array ['']);
--     if checkMsg notnull
--     then
--         return checkMsg;
--     end if;

    -- получение фио пользователя
    select fullname into userFullName from "user" where id = (params->>'user_id')::int;

    -- запись о создании
    if (params->>'id')::int = -1
    then
        historyParam = '[]' || jsonb_build_object(
                'datetime', now(),
                'type', 'create',
                'user_id', (params->>'user_id')::int,
                'user_full_name', userFullName,
                'icon', (select icon from ctlg_history_type where title = 'create' and entity = 'task'),
                'color', (select color from ctlg_history_type where title = 'create' and entity = 'task')
            );
    end if;


    -- запись обновлений существующей задачи
    if (params->>'id')::int != -1
    then
        select * into taskRow from task where id = (params->>'id')::int;
        historyParam = taskRow.history;

        if (params->>'state_id')::int != taskRow.state_id
        then
            historyParam = historyParam || jsonb_build_object(
                    'datetime', now(),
                    'type', 'state',
                    'type_ru', '',
                    'user_id', (params->>'user_id')::int,
                    'user_full_name', userFullName,
                    'old_value', (select title from ctlg_task_state where id = taskRow.state_id),
                    'new_value', (select title from ctlg_task_state where id = (params->>'state_id')::int),
                    'icon', (select icon from ctlg_history_type where title = 'state' and entity = 'task'),
                    'color', (select color from ctlg_history_type where title = 'state' and entity = 'task')
                );
        end if;

        if params->>'title' != taskRow.title
        then historyParam = historyParam || jsonb_build_object(
                'datetime', now(),
                'type', 'title',
                'user_id', (params->>'user_id')::int,
                'user_full_name', userFullName,
                'old_value', taskRow.title,
                'new_value', params->>'title',
                'icon', (select icon from ctlg_history_type where title = 'title' and entity = 'task'),
                'color', (select color from ctlg_history_type where title = 'title' and entity = 'task')
            );
        end if;
    end if;

--     update task set history = historyParam where id = taskRow.id;
    update task set history = jsonb_build_object('it', 'ok') where id = taskRow.id;
    select * into testTaskRow from task where id = taskRow.id;
    raise notice 'id: %, history: %', taskRow.id, taskRow.history;

    return historyParam;

END
$function$;

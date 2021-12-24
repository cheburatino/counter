do $$declare
    ftId int;
    ftRow functional_requirement%RowType;
--     createdTask task%RowType;
    createdTask jsonb;
begin
    for ftId in (select id from functional_requirement where state_id = 1)
    loop
        select * into ftRow from functional_requirement where id = ftId;
--         insert into task (title, functional_requirement_id, system_id, customer_id) values (format('Сформировать ФТ %s', ftId), ftId, ftRow.system_id, ftRow.customer_id) returning * into createdTask;
--         insert into task_specialist_link (task_id, specialist_id, role_id) values (createdTask.id, 1, 1);
--         insert into task_specialist_link (task_id, specialist_id, role_id) values (createdTask.id, 3, 2);
--         insert into task_specialist_link (task_id, specialist_id, role_id) values (createdTask.id, 3, 3);

        createdTask = task_update(jsonb_build_object('id', -1,
            'title', format('Сформировать ФТ %s', ftId::text),
            'functional_requirement_id', format('%s', ftId)::int,
            'system_id', format('%s', ftRow.system_id)::int,
            'customer_id', format('%s', ftRow.customer_id)));

        createdTask = task_update(jsonb_build_object(
             'id', -1,
             'title', 'test',
             'functional_requirement_id', format('%s', ftId)::int,
             'system_id', format('%s', ftRow.system_id)::int,
             'customer_id', format('%s', ftRow.customer_id)));
    end loop;
end$$;
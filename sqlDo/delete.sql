do $$
declare

begin
    delete from task;
    alter sequence task_id_seq restart with 1;
    delete from plan_end_date_change;
    alter sequence plan_end_date_change_id_seq restart with 1;

end $$;
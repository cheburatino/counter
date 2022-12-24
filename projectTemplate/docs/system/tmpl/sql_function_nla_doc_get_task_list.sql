-- получение списка задач по системе NL!A Doc

drop function if exists system_nla_doc_get_task_list(params jsonb);
create or replace function system_nla_doc_get_task_list(params jsonb)
    returns jsonb
    language plpgsql
as
$function$

declare
    result jsonb;

begin
    with t1 as (select t.id as id, t.title as title, stage.title as stage, state.title as state, t.plan_end_date
                    from task t
                        left join ctlg_task_stage stage on t.stage_id = stage.id
                        left join ctlg_task_state state on t.state_id = state.id
                    where t.system_id = 13 and t.deleted = false)
    select array_to_json(array_agg(t1.*)) into result from t1;



    return jsonb_build_object('ok', true, 'result', result);

end
$function$;
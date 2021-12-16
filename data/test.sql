do $$declare
    arr int[] := [1, 2];
begin
    select * from task where id in (arr);
end$$;
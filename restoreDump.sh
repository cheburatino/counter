#!/bin/bash

# функция выхода из скрипта при ошибке
is_err () {
    [ $? -ne 0 ]
}

# функция выхода из скрипта при ошибке
is_err () {
    [ $? -ne 0 ]
}

echo -e "\033[0;32m STEP1: create database dump...\033[0m"
ssh root@89.223.93.241 << EOF
    cd /home/deploy/electron_is
    docker exec -t electron_is_postgres_1 pg_dumpall -c -U postgres  > electron_is_dump
EOF
if is_err; then return; fi

echo -e "\033[0;32m STEP2: copy file from server...\033[0m"
scp root@89.223.93.241://home/deploy/electron_is/electron_is_dump .

# запускаем докер
docker-compose --file docker-compose.dev.yml up -d

# удаляем базу
echo -e "\033[0;32m STEP1: delete database...\033[0m"
sleep 5
docker exec -t electron_is_postgres_1 psql -U postgres -c 'DROP DATABASE electron_is'

# восстанавливаем базу
echo -e "\033[0;32m STEP2: restore database...\033[0m"
sleep 5
cat electron_is_dump | docker exec -i electron_is_postgres_1 psql -U postgres

# останавливаем докер
docker-compose stop
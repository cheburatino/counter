package main

import (
	"encoding/gob"
	"flag"
	"github.com/cheburatino/electron_is/src/graylog"
	"github.com/cheburatino/electron_is/src/jobs"
	"github.com/cheburatino/electron_is/src/pg"
	"github.com/cheburatino/electron_is/src/types"
	"github.com/cheburatino/electron_is/src/utils"
	"github.com/cheburatino/electron_is/src/webServer"
	"github.com/cheburatino/electron_is/src/sse"
	
	
	
	"math/rand"
	"os"
	"time"
	"fmt"
)

var (
	config *types.Config
	err    error
)

func main() {

	// считываем флаг dev. Если режим разработки, то меняем глобальные переменные
	isDev := flag.Bool("dev", false, "a bool")
	pgPort := flag.String("pg_port", "", "an string")
	pgPassword := flag.String("pg_pass", "", "an string")
	dbName := flag.String("dbname", "", "an string")
	
	flag.Parse()

	if *isDev {
		_ = os.Setenv("PG_PORT", "5438")
		if len(*pgPort) > 0 {
			_ = os.Setenv("PG_PORT", *pgPort)
		}
		if len(*pgPassword) > 0 {
			_ = os.Setenv("PG_PASSWORD", *pgPassword)
		}
		_ = os.Setenv("PG_HOST", "localhost")
		if len(*dbName) > 0 {
			_ = os.Setenv("PG_DBNAME", *dbName)
		}
		
		_ = os.Setenv("IS_DEVELOPMENT", "true")
	}

	// read config.toml
	config, err = types.ReadConfigFile("./config.toml")
	utils.CheckErr(err, "Read config")

    if os.Getenv("IS_DEVELOPMENT") != "true" {
        time.Sleep(5 * time.Second)
    }

	// postgres
	err = pg.StartPostgres(config.Postgres)
	utils.CheckErr(err, "StartPostgres")

	// подключаемся к серверу сбора логов
	err = graylog.Init(config.Graylog, func() map[string]string {
        return nil
    }())
	if err != nil {
	    fmt.Printf("Connect to GraylogConfig %s\n", err)
	}

	// инициализируем генератор случайных чисел
	rand.Seed(time.Now().UnixNano())
	//
	gob.Register(map[string]interface{}{})
	//
	jobs.StartJobs()

	// передаем часть конфига в utils
	utils.SetWebServerConfig(config.WebServer)
	utils.SetEmailConfig(config.Email)
	
	

	//go pg.GenerateFakeUsers(100)
	

	// инициализируем брокера для обработки подключений по SSE
	sse.Init()

	webServer.StartWebServer(*config)
}

package main

import (
	"github.com/cheburatino/electron_is/projectTemplate/docs/client"
	"github.com/cheburatino/electron_is/projectTemplate/docs/internal_task"
	"github.com/cheburatino/electron_is/projectTemplate/docs/man"
	"github.com/cheburatino/electron_is/projectTemplate/docs/project"
	"github.com/otiai10/copy"
	"github.com/pepelazz/projectBlueprint/projectTemplate/utils"
	"github.com/pepelazz/projectGenerator"
	t "github.com/pepelazz/projectGenerator/types"
	"os"
)

func main() {
	projectGenerator.Start(getProject(), nil)
}

func getProject() t.ProjectType {
	p := &t.ProjectType{
		Name: "Electron",
		Docs: []t.DocType{
			client.GetDoc(),
			project.GetDoc(),
			internal_task.GetDoc(),
			man.GetDoc(),
		},
	}
	// названием базы маленькими буквами, без пробелов
	p.Config.Postgres = t.PostrgesConfig{"electron_is", 5646, "ktulhu77", "Europe/Moscow"}
	p.Config.WebServer = t.WebServerConfig{3091, "https://system.i-electron.ru", "/home/deploy/electron_is", "89.223.93.241", "root"}
	// TODO: надо прописать настройки почтового сервера для отправки email
	//Например, p.Config.Email = types.EmailConfig{"info@mail.ru", "password", "smtp.mail.ru", 465, "CompanyName"}
	p.Config.Email = t.EmailConfig{"system@i-electron.ru", "Insys12332112", "smtp.yandex.ru", 465, "Electron", false}
	p.Config.Logo = "statics/image/electron_logo.png"
	// формируем routes для Vue
	p.FillVueBaseRoutes()
	p.Vue.UiAppName = "Electron"

	// боковое меню для Vue
	p.Vue.Menu = []t.VueMenu{
		{Url: "users", Text: "Пользователи", Icon: "statics/image/user.svg", Roles: []string{utils.RoleAdmin}},
		{DocName: "project"},
		{DocName: "internal_task"},
		{DocName: "client"},
		{DocName: "man"},
		//{Text: "Задачи", Icon: "https://image.flaticon.com/icons/svg/1642/1642808.svg", IsFolder:true, LinkList:[]t.VueMenu{{Text: "Список задач", Url: "task"}, {Text: "Типы задач", Url: "taskType"}}},
	}
	p.FillSideMenu()

	// копируем файлы проекта (которые не шаблоны)
	if _, err := os.Stat("./sourceFiles"); !os.IsNotExist(err) {
		err := copy.Copy("./sourceFiles", "../")
		utils.CheckErr(err, "Copy sourceFiles")
	}

	return *p
}

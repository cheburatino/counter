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
	p.Config.Logo = "https://sun9-62.userapi.com/impg/F-5YBo8Q_x7zEvb84K3yXcPszuaap01ckDVNFQ/CUIn2MAFtOQ.jpg?size=1126x465&quality=96&proxy=1&sign=429dc4b365be888cca6a277c5ebcfe54"
	// формируем routes для Vue
	p.FillVueBaseRoutes()
	p.Vue.UiAppName = "Electron"

	// боковое меню для Vue
	p.Vue.Menu = []t.VueMenu{
		{Url: "users", Text: "Пользователи", Icon: "https://image.flaticon.com/icons/svg/423/423063.svg", Roles: []string{utils.RoleAdmin}},
		{DocName: "internal_task"},
		{DocName: "client"},
		{DocName: "man"},
		{DocName: "project"},
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

package main

import (
	"github.com/cheburatino/electron_is/projectTemplate/docs/comment"
	"github.com/cheburatino/electron_is/projectTemplate/docs/company"
	"github.com/cheburatino/electron_is/projectTemplate/docs/contract"
	"github.com/cheburatino/electron_is/projectTemplate/docs/counterparty"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDevTaskState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDigitalSolutionState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgElectronSkill"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgFunctionalRequirementState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgRequestState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgSubtaskState"
	ctlgTaskStatusType "github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskStatusType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTimeType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolution"
	"github.com/cheburatino/electron_is/projectTemplate/docs/functionalRequirement"
	"github.com/cheburatino/electron_is/projectTemplate/docs/invoice"
	"github.com/cheburatino/electron_is/projectTemplate/docs/man"
	"github.com/cheburatino/electron_is/projectTemplate/docs/meeting"
	"github.com/cheburatino/electron_is/projectTemplate/docs/request"
	"github.com/cheburatino/electron_is/projectTemplate/docs/sprint"
	"github.com/cheburatino/electron_is/projectTemplate/docs/system"
	"github.com/cheburatino/electron_is/projectTemplate/docs/task"
	"github.com/cheburatino/electron_is/projectTemplate/docs/time"
	"github.com/otiai10/copy"
	"github.com/pepelazz/nla_framework"
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/projectBlueprint/projectTemplate/utils"
	"os"
)

func main() {
	nla_framework.Start(getProject(), nil)
}

func getProject() t.ProjectType {
	p := &t.ProjectType{
		Name: "Electron",
	}
	p.Config.Vue.QuasarVersion = 2

	p.Docs = []t.DocType{
		ctlgElectronSkill.GetDoc(),
		ctlgRequestState.GetDoc(),
		ctlgTimeType.GetDoc(),
		ctlgDigitalSolutionState.GetDoc(),
		ctlgFunctionalRequirementState.GetDoc(),
		ctlgDevTaskState.GetDoc(),
		ctlgTaskStatusType.GetDoc(),
		ctlgSubtaskState.GetDoc(),
		meeting.GetDoc(),
		contract.GetDoc(),
		counterparty.GetDoc(),
		company.GetDoc(),
		man.GetDoc(),
		system.GetDoc(),
		request.GetDoc(),
		sprint.GetDoc(),
		digitalSolution.GetDoc(),
		functionalRequirement.GetDoc(),
		invoice.GetDoc(),
		task.GetDoc(),
		time.GetDoc(),
		comment.GetDoc(),
	}

	// названием базы маленькими буквами, без пробелов
	p.Config.Postgres = t.PostrgesConfig{"electron_is", 5646, "ktulhu77", "Europe/Moscow", "12"}
	p.Config.WebServer = t.WebServerConfig{3091, "https://system.i-electron.ru", "/home/deploy/electron_is", "212.193.59.40", "root", 22}
	p.Config.Email = t.EmailConfig{"system@i-electron.ru", "Insys12332112", "smtp.yandex.ru", 465, "Electron", false}
	p.Config.Logo = "image/electron_logo.png"
	// формируем routes для Vue
	p.FillVueBaseRoutes()
	p.Vue.UiAppName = "Electron"

	// боковое меню для Vue
	p.Vue.Menu = []t.VueMenu{
		{DocName: "request"},
		{DocName: "functional_requirement"},
		{DocName: "digital_solution"},
		{DocName: "task"},
		{DocName: "meeting"},
		{DocName: "time"},
		{DocName: "sprint"},
		{DocName: "system"},
		{DocName: "company"},
		{DocName: "man"},
		{DocName: "counterparty"},
		{DocName: "contract"},
		{DocName: "invoice"},
		{Text: "Справочники", Icon: "image/catalog.svg", IsFolder: true, LinkList: []t.VueMenu{
			{Url: "users", Text: "Пользователи", Icon: "image/user.svg", Roles: []string{utils.RoleAdmin}},
			{Text: "Сотрудники", Url: "employee"},
			{Text: "Компетенции", Url: "ctlg_electron_skill"},
			{Text: "Статусы запросов", Url: "ctlg_request_state"},
			{Text: "Статусы функциональных требований", Url: "ctlg_functional_requirement_state"},
			{Text: "Статусы цифровых решений", Url: "ctlg_digital_solution_state"},
			{Text: "Типы времени", Url: "ctlg_time_type"},
			{Text: "Типы статусов задач", Url: "ctlg_task_status_type"},
			{Text: "Статусы задач разработки", Url: "ctlg_dev_task_state"},
			{Text: "Статусы подзадач", Url: "ctlg_subtask_state"},
		}},
	}
	p.FillSideMenu()

	// копируем файлы проекта (которые не шаблоны)
	if _, err := os.Stat("./sourceFiles"); !os.IsNotExist(err) {
		err := copy.Copy("./sourceFiles", "../")
		utils.CheckErr(err, "Copy sourceFiles")
	}

	return *p
}

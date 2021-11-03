package main

import (
	"github.com/cheburatino/electron_is/projectTemplate/docs/bug"
	"github.com/cheburatino/electron_is/projectTemplate/docs/comment"
	"github.com/cheburatino/electron_is/projectTemplate/docs/company"
	"github.com/cheburatino/electron_is/projectTemplate/docs/contract"
	"github.com/cheburatino/electron_is/projectTemplate/docs/counterparty"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgBugState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgCustomerTaskState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDevTaskState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDigitalSolutionSpecialistRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDigitalSolutionState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgElectronSkill"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgFunctionalRequirementState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgRequestState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgSubtaskState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskState"
	ctlgTaskStatusType "github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskStatusType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTimeType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/customerTask"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolution"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolutionCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolutionSpecialistLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/functionalRequirement"
	"github.com/cheburatino/electron_is/projectTemplate/docs/invoice"
	"github.com/cheburatino/electron_is/projectTemplate/docs/man"
	"github.com/cheburatino/electron_is/projectTemplate/docs/meeting"
	"github.com/cheburatino/electron_is/projectTemplate/docs/newsFromDima"
	"github.com/cheburatino/electron_is/projectTemplate/docs/request"
	"github.com/cheburatino/electron_is/projectTemplate/docs/sprint"
	"github.com/cheburatino/electron_is/projectTemplate/docs/system"
	"github.com/cheburatino/electron_is/projectTemplate/docs/task"
	"github.com/cheburatino/electron_is/projectTemplate/docs/taskSpecialistLink"
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
		ctlgElectronSkill.GetDoc(p),
		ctlgRequestState.GetDoc(p),
		ctlgTimeType.GetDoc(p),
		ctlgDigitalSolutionState.GetDoc(p),
		ctlgDigitalSolutionSpecialistRole.GetDoc(p),
		ctlgFunctionalRequirementState.GetDoc(p),
		ctlgTaskType.GetDoc(p),
		ctlgTaskState.GetDoc(p),
		ctlgTaskRole.GetDoc(p),
		ctlgDevTaskState.GetDoc(p),
		ctlgTaskStatusType.GetDoc(p),
		ctlgSubtaskState.GetDoc(p),
		ctlgBugState.GetDoc(p),
		ctlgCustomerTaskState.GetDoc(p),
		meeting.GetDoc(p),
		contract.GetDoc(p),
		counterparty.GetDoc(p),
		company.GetDoc(p),
		man.GetDoc(p),
		system.GetDoc(p),
		request.GetDoc(p),
		sprint.GetDoc(p),
		digitalSolution.GetDoc(p),
		functionalRequirement.GetDoc(p),
		invoice.GetDoc(p),
		task.GetDoc(p),
		customerTask.GetDoc(p),
		bug.GetDoc(p),
		taskSpecialistLink.GetDoc(p),
		digitalSolutionSpecialistLink.GetDoc(p),
		digitalSolutionCustomerAgentLink.GetDoc(p),
		time.GetDoc(p),
		comment.GetDoc(p),
		newsFromDima.GetDoc(p),
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
		{DocName: "customer_task"},
		{DocName: "bug"},
		{DocName: "meeting"},
		{DocName: "time"},
		{DocName: "sprint"},
		{DocName: "system"},
		{DocName: "company"},
		{DocName: "man"},
		{DocName: "counterparty"},
		{DocName: "contract"},
		{DocName: "invoice"},
		{DocName: "news_from_dima"},
		{Text: "Справочники", Icon: "image/catalog.svg", IsFolder: true, LinkList: []t.VueMenu{
			{Url: "users", Text: "Пользователи", Icon: "image/user.svg", Roles: []string{utils.RoleAdmin}},
			{Text: "Компетенции", Url: "ctlg_electron_skill"},
			{Text: "Статусы запросов", Url: "ctlg_request_state"},
			{Text: "Статусы функциональных требований", Url: "ctlg_functional_requirement_state"},
			{Text: "Статусы цифровых решений", Url: "ctlg_digital_solution_state"},
			{Text: "Роли специалистов в цифровых решениях", Url: "ctlg_digital_solution_specialist_role"},
			{Text: "Типы задач", Url: "ctlg_task_type"},
			{Text: "Статусы задач", Url: "ctlg_task_state"},
			{Text: "Роли в задачах", Url: "ctlg_task_role"},
			{Text: "Статусы задач заказчиков", Url: "ctlg_customer_task_state"},
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

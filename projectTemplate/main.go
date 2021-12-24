package main

import (
	"github.com/cheburatino/electron_is/projectTemplate/docs/bug"
	"github.com/cheburatino/electron_is/projectTemplate/docs/bugCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/comment"
	"github.com/cheburatino/electron_is/projectTemplate/docs/company"
	"github.com/cheburatino/electron_is/projectTemplate/docs/companyManLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/contract"
	"github.com/cheburatino/electron_is/projectTemplate/docs/counterparty"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgBugState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgCustomerTaskState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDigitalSolutionSpecialistRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDigitalSolutionState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgElectronSkill"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgFunctionalRequirementSpecialistRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgFunctionalRequirementState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgRequestPriority"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgRequestState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTimeType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgWorkSpecialistRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgWorkState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/customerTask"
	"github.com/cheburatino/electron_is/projectTemplate/docs/customerTaskCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolution"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolutionCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolutionSpecialistLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/functionalRequirement"
	"github.com/cheburatino/electron_is/projectTemplate/docs/functionalRequirementCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/functionalRequirementSpecialistLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/invoice"
	"github.com/cheburatino/electron_is/projectTemplate/docs/man"
	"github.com/cheburatino/electron_is/projectTemplate/docs/meeting"
	"github.com/cheburatino/electron_is/projectTemplate/docs/newsFromDima"
	"github.com/cheburatino/electron_is/projectTemplate/docs/request"
	"github.com/cheburatino/electron_is/projectTemplate/docs/requestCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/system"
	"github.com/cheburatino/electron_is/projectTemplate/docs/systemCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/task"
	"github.com/cheburatino/electron_is/projectTemplate/docs/taskSpecialistLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/time"
	"github.com/cheburatino/electron_is/projectTemplate/docs/work"
	"github.com/cheburatino/electron_is/projectTemplate/docs/workSpecialistLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/workTaskLink"
	"github.com/otiai10/copy"
	"github.com/pepelazz/nla_framework"
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/projectBlueprint/projectTemplate/utils"
	"os"
)

const ROLE_CUSTOMER = "customer"
const ROLE_SPECIALIST = "specialist"

func main() {
	nla_framework.Start(getProject(), nil)
}

func getProject() t.ProjectType {
	p := &t.ProjectType{
		Name: "Electron",
	}
	p.Config.Vue.QuasarVersion = 2
	p.FillI18n()

	p.Docs = []t.DocType{
		ctlgElectronSkill.GetDoc(p),
		ctlgRequestState.GetDoc(p),
		ctlgRequestPriority.GetDoc(p),
		ctlgTimeType.GetDoc(p),
		ctlgDigitalSolutionState.GetDoc(p),
		ctlgDigitalSolutionSpecialistRole.GetDoc(p),
		ctlgFunctionalRequirementState.GetDoc(p),
		ctlgFunctionalRequirementSpecialistRole.GetDoc(p),
		ctlgTaskType.GetDoc(p),
		ctlgTaskState.GetDoc(p),
		ctlgTaskRole.GetDoc(p),
		ctlgWorkState.GetDoc(p),
		ctlgWorkSpecialistRole.GetDoc(p),
		ctlgBugState.GetDoc(p),
		ctlgCustomerTaskState.GetDoc(p),
		meeting.GetDoc(p),
		contract.GetDoc(p),
		counterparty.GetDoc(p),
		company.GetDoc(p),
		man.GetDoc(p),
		system.GetDoc(p),
		request.GetDoc(p),
		digitalSolution.GetDoc(p),
		functionalRequirement.GetDoc(p),
		invoice.GetDoc(p),
		task.GetDoc(p),
		work.GetDoc(p),
		customerTask.GetDoc(p),
		bug.GetDoc(p),
		taskSpecialistLink.GetDoc(p),
		systemCustomerAgentLink.GetDoc(p),
		requestCustomerAgentLink.GetDoc(p),
		functionalRequirementCustomerAgentLink.GetDoc(p),
		digitalSolutionSpecialistLink.GetDoc(p),
		functionalRequirementSpecialistLink.GetDoc(p),
		digitalSolutionCustomerAgentLink.GetDoc(p),
		customerTaskCustomerAgentLink.GetDoc(p),
		bugCustomerAgentLink.GetDoc(p),
		workSpecialistLink.GetDoc(p),
		workTaskLink.GetDoc(p),
		companyManLink.GetDoc(p),
		time.GetDoc(p),
		comment.GetDoc(p),
		newsFromDima.GetDoc(p),
	}

	// названием базы маленькими буквами, без пробелов
	p.Config.Postgres = t.PostrgesConfig{DbName: "electron_is", Port: 5646, Password: "ktulhu77", TimeZone: "Europe/Moscow", Version: "12"}
	p.Config.WebServer = t.WebServerConfig{3091, "https://system.i-electron.ru", "/home/deploy/electron_is", "212.193.59.40", "root", 22}
	p.Config.Email = t.EmailConfig{"system@i-electron.ru", "Insys12332112", "smtp.yandex.ru", 465, "Electron", false}
	p.Config.Logo = "image/electron_logo.png"
	// формируем routes для Vue
	p.FillVueBaseRoutes()
	p.Vue.UiAppName = "Electron"
	p.Roles = []t.ProjectRole{
		{Name: ROLE_CUSTOMER, NameRu: "заказчик"},
		{Name: ROLE_SPECIALIST, NameRu: "специалист"},
	}

	p.Config.Graylog = t.GraylogConfig{Host: "85.143.214.161", Port: 12201}

	// боковое меню для Vue
	p.Vue.Menu = []t.VueMenu{
		{DocName: "system", Roles: []string{utils.RoleAdmin, ROLE_SPECIALIST, ROLE_CUSTOMER}},
		{DocName: "request", Roles: []string{utils.RoleAdmin, ROLE_SPECIALIST, ROLE_CUSTOMER}},
		{DocName: "functional_requirement", Roles: []string{utils.RoleAdmin, ROLE_SPECIALIST, ROLE_CUSTOMER}},
		//{DocName: "digital_solution", Roles: []string{utils.RoleAdmin, ROLE_SPECIALIST, ROLE_CUSTOMER}},
		{DocName: "bug", Roles: []string{utils.RoleAdmin, ROLE_CUSTOMER, ROLE_SPECIALIST}},
		{DocName: "task", Roles: []string{utils.RoleAdmin, ROLE_SPECIALIST}},
		{DocName: "work", Roles: []string{utils.RoleAdmin, ROLE_SPECIALIST}},
		{DocName: "customer_task", Roles: []string{utils.RoleAdmin, ROLE_CUSTOMER, ROLE_SPECIALIST}},
		//{DocName: "meeting", Roles: []string{utils.RoleAdmin, ROLE_SPECIALIST}},
		//{DocName: "time", Roles: []string{utils.RoleAdmin}},
		{DocName: "company", Roles: []string{utils.RoleAdmin}},
		{DocName: "man", Roles: []string{utils.RoleAdmin}},
		//{DocName: "counterparty", Roles: []string{utils.RoleAdmin}},
		//{DocName: "contract", Roles: []string{utils.RoleAdmin}},
		//{DocName: "invoice", Roles: []string{utils.RoleAdmin}},
		//{DocName: "news_from_dima", Roles: []string{utils.RoleAdmin}},
		{Text: "Справочники", Icon: "image/catalog.svg", IsFolder: true, Roles: []string{utils.RoleAdmin}, LinkList: []t.VueMenu{
			{Url: "users", Text: "Пользователи", Icon: "image/user.svg"},
			{Text: "Статусы запросов", Url: "ctlg_request_state"},
			{Text: "Приоритеты запросов", Url: "ctlg_request_priority"},
			{Text: "Статусы функциональных требований", Url: "ctlg_functional_requirement_state"},
			{Text: "Роли специалистов в функциональных требованиях", Url: "ctlg_functional_requirement_specialist_role"},
			{Text: "Статусы цифровых решений", Url: "ctlg_digital_solution_state"},
			{Text: "Роли специалистов в цифровых решениях", Url: "ctlg_digital_solution_specialist_role"},
			{Text: "Типы задач", Url: "ctlg_task_type"},
			{Text: "Статусы задач", Url: "ctlg_task_state"},
			{Text: "Роли в задачах", Url: "ctlg_task_role"},
			{Text: "Статусы дел", Url: "ctlg_work_state"},
			{Text: "Роли специалистов в делах", Url: "ctlg_work_specialist_role"},
			{Text: "Статусы задач заказчиков", Url: "ctlg_customer_task_state"},
			{Text: "Статусы багов", Url: "ctlg_bug_state"},
		}},
	}
	p.FillSideMenu()

	p.AddI18n("ru", "user", "role_"+ROLE_CUSTOMER, "заказчик")
	p.AddI18n("ru", "user", "role_"+ROLE_SPECIALIST, "специалист")

	// копируем файлы проекта (которые не шаблоны)
	if _, err := os.Stat("./sourceFiles"); !os.IsNotExist(err) {
		err := copy.Copy("./sourceFiles", "../")
		utils.CheckErr(err, "Copy sourceFiles")
	}

	return *p
}

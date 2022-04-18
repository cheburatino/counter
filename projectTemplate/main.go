package main

import (
	"github.com/cheburatino/electron_is/projectTemplate/docs/bug"
	"github.com/cheburatino/electron_is/projectTemplate/docs/bugCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/comment"
	"github.com/cheburatino/electron_is/projectTemplate/docs/company"
	"github.com/cheburatino/electron_is/projectTemplate/docs/companyManLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/completionAct"
	"github.com/cheburatino/electron_is/projectTemplate/docs/contract"
	"github.com/cheburatino/electron_is/projectTemplate/docs/counterparty"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgBugState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgCompletionActState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgContractState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDevelopmentTaskState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDevelopmentTaskType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDigitalSolutionSpecialistRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgDigitalSolutionState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgFilter"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgFunctionalRequirementSpecialistRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgFunctionalRequirementState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgInvoiceState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgModelState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgModelType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgOrderBy"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgRequestPriority"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgRequestState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTaskType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTechnicalTaskState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTechnicalTaskWorkState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgTimeType"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgWorkSpecialistRole"
	"github.com/cheburatino/electron_is/projectTemplate/docs/ctlgWorkState"
	"github.com/cheburatino/electron_is/projectTemplate/docs/customerTask"
	"github.com/cheburatino/electron_is/projectTemplate/docs/developmentTask"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolution"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolutionCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/digitalSolutionSpecialistLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/functionalRequirement"
	"github.com/cheburatino/electron_is/projectTemplate/docs/functionalRequirementCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/functionalRequirementSpecialistLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/invoice"
	"github.com/cheburatino/electron_is/projectTemplate/docs/man"
	"github.com/cheburatino/electron_is/projectTemplate/docs/meeting"
	"github.com/cheburatino/electron_is/projectTemplate/docs/model"
	"github.com/cheburatino/electron_is/projectTemplate/docs/newsFromDima"
	"github.com/cheburatino/electron_is/projectTemplate/docs/payment"
	"github.com/cheburatino/electron_is/projectTemplate/docs/request"
	"github.com/cheburatino/electron_is/projectTemplate/docs/requestCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/sprint"
	"github.com/cheburatino/electron_is/projectTemplate/docs/system"
	"github.com/cheburatino/electron_is/projectTemplate/docs/systemCustomerAgentLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/task"
	"github.com/cheburatino/electron_is/projectTemplate/docs/taskSpecialistLink"
	"github.com/cheburatino/electron_is/projectTemplate/docs/technicalTask"
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
		ctlgRequestState.GetDoc(p),
		ctlgModelState.GetDoc(p),
		ctlgModelType.GetDoc(p),
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
		ctlgContractState.GetDoc(p),
		ctlgTechnicalTaskState.GetDoc(p),
		ctlgTechnicalTaskWorkState.GetDoc(p),
		ctlgCompletionActState.GetDoc(p),
		ctlgInvoiceState.GetDoc(p),
		ctlgFilter.GetDoc(p),
		ctlgOrderBy.GetDoc(p),
		ctlgDevelopmentTaskState.GetDoc(p),
		ctlgDevelopmentTaskType.GetDoc(p),
		meeting.GetDoc(p),
		contract.GetDoc(p),
		technicalTask.GetDoc(p),
		counterparty.GetDoc(p),
		company.GetDoc(p),
		man.GetDoc(p),
		system.GetDoc(p),
		request.GetDoc(p),
		digitalSolution.GetDoc(p),
		developmentTask.GetDoc(p),
		model.GetDoc(p),
		functionalRequirement.GetDoc(p),
		invoice.GetDoc(p),
		payment.GetDoc(p),
		completionAct.GetDoc(p),
		sprint.GetDoc(p),
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
		{DocName: "task", Roles: []string{utils.RoleAdmin, ROLE_SPECIALIST}},
		{Text: "Разработка", Icon: "image/development.png", IsFolder: true, Roles: []string{utils.RoleAdmin}, LinkList: []t.VueMenu{
			{Text: "Системы", Url: "system"},
			{Text: "Цифровые решения", Url: "digital_solution"},
			{Text: "Задачи на разработку", Url: "development_task"},
		},},
		{Text: "CRM", Icon: "image/crm.png", IsFolder: true, Roles: []string{utils.RoleAdmin}, LinkList: []t.VueMenu{
			{Text: "Компании", Url: "company"},
			{Text: "Контакты", Url: "man"},
			{Text: "Контрагенты", Url: "counterparty"},
			{Text: "Договоры", Url: "contract"},
			{Text: "ТЗ", Url: "technical_task"},
			{Text: "Акты", Url: "completion_act"},
			{Text: "Счета", Url: "invoice"},
			{Text: "Платежи", Url: "payment"},
		},},
		{Text: "Справочники", Icon: "image/catalog.svg", IsFolder: true, Roles: []string{utils.RoleAdmin}, LinkList: []t.VueMenu{
			{Url: "users", Text: "Пользователи", Icon: "image/user.svg"},
			{Text: "Статусы цифровых решений", Url: "ctlg_digital_solution_state"},
			{Text: "Статусы задач", Url: "ctlg_task_state"},
			{Text: "Статусы задач на разработку", Url: "ctlg_development_task_state"},
			{Text: "Статусы договоров", Url: "ctlg_contract_state"},
			{Text: "Статусы технических заданий", Url: "ctlg_technical_task_state"},
			{Text: "Статусы работ по ТЗ", Url: "ctlg_technical_task_work_state"},
			{Text: "Статусы актов", Url: "ctlg_completion_act_state"},
			{Text: "Статусы счетов", Url: "ctlg_invoice_state"},
			{Text: "Типы задач на разработку", Url: "ctlg_development_task_type"},
			{Text: "Типы задач", Url: "ctlg_task_type"},
			{Text: "Фильтры", Url: "ctlg_filter"},
			{Text: "Сортировки", Url: "ctlg_order_by"},
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

package main

import (
	"github.com/cheburatino/counter/projectTemplate/docs/company"
	"github.com/cheburatino/counter/projectTemplate/docs/completionAct"
	"github.com/cheburatino/counter/projectTemplate/docs/contact"
	"github.com/cheburatino/counter/projectTemplate/docs/contract"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgCompletionActState"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgContractState"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgFilter"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgHystoryType"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgInvoiceState"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgMeetingState"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgOrderBy"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgSystemState"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgTaskStage"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgTaskState"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgTaskType"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgTechnicalTaskState"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgTechnicalTaskWorkState"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgTimeState"
	"github.com/cheburatino/counter/projectTemplate/docs/ctlgWorkState"
	"github.com/cheburatino/counter/projectTemplate/docs/invoice"
	"github.com/cheburatino/counter/projectTemplate/docs/legalEntity"
	"github.com/cheburatino/counter/projectTemplate/docs/meeting"
	"github.com/cheburatino/counter/projectTemplate/docs/payment"
	"github.com/cheburatino/counter/projectTemplate/docs/system"
	"github.com/cheburatino/counter/projectTemplate/docs/task"
	"github.com/cheburatino/counter/projectTemplate/docs/technicalTask"
	"github.com/cheburatino/counter/projectTemplate/docs/time"
	"github.com/cheburatino/counter/projectTemplate/docs/work"
	"github.com/cheburatino/counter/projectTemplate/docs/workTimeSheet"
	"github.com/cheburatino/counter/projectTemplate/utils"
	"github.com/otiai10/copy"
	"github.com/pepelazz/nla_framework"
	t "github.com/pepelazz/nla_framework/types"
	"os"
)

const ROLE_CUSTOMER = "customer"
const ROLE_SPECIALIST = "specialist"

func main() {
	nla_framework.Start(getProject(), nil)
}

func getProject() t.ProjectType {
	p := &t.ProjectType{
		Name: "Counter",
	}
	p.Config.Vue.QuasarVersion = 2
	p.FillI18n()

	p.Docs = []t.DocType{
		ctlgHystoryType.GetDoc(p),
		ctlgSystemState.GetDoc(p),
		ctlgMeetingState.GetDoc(p),
		ctlgTaskType.GetDoc(p),
		ctlgTaskStage.GetDoc(p),
		ctlgTaskState.GetDoc(p),
		ctlgWorkState.GetDoc(p),
		ctlgContractState.GetDoc(p),
		ctlgTechnicalTaskState.GetDoc(p),
		ctlgTechnicalTaskWorkState.GetDoc(p),
		ctlgCompletionActState.GetDoc(p),
		ctlgInvoiceState.GetDoc(p),
		ctlgFilter.GetDoc(p),
		ctlgOrderBy.GetDoc(p),
		ctlgTimeState.GetDoc(p),
		company.GetDoc(p),
		contact.GetDoc(p),
		system.GetDoc(p),
		legalEntity.GetDoc(p),
		contract.GetDoc(p),
		workTimeSheet.GetDoc(p),
		technicalTask.GetDoc(p),
		task.GetDoc(p),
		meeting.GetDoc(p),
		invoice.GetDoc(p),
		payment.GetDoc(p),
		completionAct.GetDoc(p),
		work.GetDoc(p),
		time.GetDoc(p),
	}

	// названием базы маленькими буквами, без пробелов
	p.Config.Postgres = t.PostrgesConfig{DbName: "counter", Port: 5646, Password: "maximum777strong_password!", TimeZone: "Europe/Moscow", Version: "12"}
	p.Config.WebServer = t.WebServerConfig{3098, "https://demo-counter.i-electron.ru", "/home/deploy/counter", "85.143.173.169", "root", 22}
	p.Config.Email = t.EmailConfig{"system@i-electron.ru", "Insys12332112", "smtp.yandex.ru", 465, "Electron", false}
	p.Config.Logo = "image/counter.png"
	// формируем routes для Vue
	p.FillVueBaseRoutes()
	p.Vue.UiAppName = "Counter"
	p.Roles = []t.ProjectRole{
		{Name: ROLE_CUSTOMER, NameRu: "заказчик"},
		{Name: ROLE_SPECIALIST, NameRu: "специалист"},
	}

	//p.Config.Graylog = t.GraylogConfig{Host: "85.143.214.161", Port: 12201}

	p.Go.Routes = t.ProjectGoRoutes{
		Imports: []string{
			"github.com/cheburatino/counter/src/api",
		},
		NotAuth: []string{
			"r.POST(\"/get_nla_doc_task_list\", api.GetNlaDocTaskList)",
		},
	}

	p.Vue.Theme = t.VueTheme{
		IsDarkThemeExist: true,
	}

	// боковое меню для Vue
	p.Vue.Menu = []t.VueMenu{
		{DocName: "system"},
		{DocName: "task"},
		{DocName: "work", Roles: []string{utils.RoleAdmin}},
		{DocName: "time", Roles: []string{utils.RoleAdmin}},
		{DocName: "meeting"},
		{Text: "CRM", Icon: "image/crm.png", IsFolder: true, Roles: []string{utils.RoleAdmin}, LinkList: []t.VueMenu{
			{Text: "Компании", Url: "company"},
			{Text: "Юр.лица", Url: "legal_entity"},
			{Text: "Контакты", Url: "contact"},
			{Text: "Договоры", Url: "contract"},
			{Text: "ТЗ", Url: "technical_task"},
			{Text: "ЛУРВ", Url: "work_time_sheet"},
			{Text: "Акты", Url: "completion_act"},
			{Text: "Счета", Url: "invoice"},
			{Text: "Платежи", Url: "payment"},
		}},
		{Text: "Справочники", Icon: "image/catalog.svg", IsFolder: true, Roles: []string{utils.RoleAdmin}, LinkList: []t.VueMenu{
			{Url: "users", Text: "Пользователи", Icon: "image/user.svg"},
			{Text: "Статусы встреч", Url: "ctlg_meeting_state"},
			{Text: "Статусы систем", Url: "ctlg_system_state"},
			{Text: "Этапы задачи", Url: "ctlg_task_stage"},
			{Text: "Состояния задачи", Url: "ctlg_task_state"},
			{Text: "Статусы работ", Url: "ctlg_work_state"},
			{Text: "Статусы времени", Url: "ctlg_time_state"},
			{Text: "Статусы договоров", Url: "ctlg_contract_state"},
			{Text: "Статусы документов по ТЗ", Url: "ctlg_technical_task_state"},
			{Text: "Статусы работ по ТЗ", Url: "ctlg_technical_task_work_state"},
			{Text: "Статусы актов", Url: "ctlg_completion_act_state"},
			{Text: "Статусы счетов", Url: "ctlg_invoice_state"},
			{Text: "Типы истории", Url: "ctlg_history_type"},
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

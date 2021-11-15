package customerTask

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "customer_task"
	name_ru         = "задача заказчика"
	name_ru_plural  = "задачи заказчиков"
	menu_icon       = "image/customer_task.png"
	breadcrumb_icon = "fas fa-clipboard-check"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldRef("state_id", "статус", "ctlg_customer_task_state", [][]int{{1, 2}}).SetDefault("1"),
			t.GetFldSimpleHtml([][]int{{2, 1}}, "", "<p>Дата и время создания: {{item.created_at}}</p>"),
			t.GetFldSimpleHtml([][]int{{2, 2}}, "", "<p>Дата и время изменения: {{item.updated_at}}</p>"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("files", "файлы", [][]int{{4, 1}}, t.FldVueFilesParams{MaxFileSize: 10000}),
			t.GetFldImgList("images", "изображения", [][]int{{4, 2}}, t.FldVueImgParams{}),
			t.GetFldJsonbCompositionWithoutFld([][]int{{5, 1}}, "col-4", "comp-customer"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{6, 1}}, "isShowLink", "isClearable"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{6, 2}}, "", "comp-customerAgent", ":currentUser='currentUser'"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{7, 1}}, "col-4", "comp-relation"),
			t.GetFldRef("request_id", "запрос", "request", [][]int{{8, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("system_id", "система", "system", [][]int{{8, 2}}, "isShowLink", "isClearable"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{9, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("functional_requirement_id", "функциональное требование", "functional_requirement", [][]int{{9, 2}}, "isShowLink", "isClearable"),
			t.GetFldRef("bug_id", "баг", "bug", [][]int{{10, 1}}, "isShowLink", "isClearable"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{11, 1}}, "col-4", "comp-date"),
			t.GetFldDate("plan_start_date", "плановая дата начала", [][]int{{12, 1}}, "col-3"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{12, 2}}, "col-3"),
			t.GetFldSimpleHtml([][]int{{12, 3}}, "col-2", "<p>История</p>"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{13, 1}}, "col-4", "comp-result"),
			t.GetFldString("result", "результат", 0, [][]int{{14, 1}}, "col-8"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates: map[string]*t.DocTemplate{
			"sql_function_list.sql": {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
		},
	}
	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)
	doc.Vue.AddFixedSaveBtn()

	doc.AddVueComposition("docItem", "customer")
	doc.AddVueComposition("docItem", "customerAgent")
	doc.AddVueComposition("docItem", "relation")
	doc.AddVueComposition("docItem", "date")
	doc.AddVueComposition("docItem", "result")

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	return doc
}

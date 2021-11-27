package task

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "task"
	name_ru         = "задача"
	name_ru_plural  = "задачи"
	menu_icon       = "image/task.svg"
	breadcrumb_icon = "fas fa-clipboard-check"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldRef("type_id", "тип задачи", "ctlg_task_type", [][]int{{1, 2}}, "col-2"),
			t.GetFldRef("state_id", "статус", "ctlg_task_state", [][]int{{1, 3}}, "col-2").SetDefault("1"),
			t.GetFldSimpleHtml([][]int{{2, 1}}, "", "<p>Дата и время создания: {{item.created_at}}</p>"),
			t.GetFldSimpleHtml([][]int{{2, 2}}, "", "<p>Дата и время изменения: {{item.updated_at}}</p>"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("files", "файлы", [][]int{{4, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("images", "изображения", [][]int{{4, 2}}, t.FldVueImgParams{}),
			t.GetFldJsonbCompositionWithoutFld([][]int{{5, 1}}, "col-4", "comp-executor"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{6, 1}}, "", "comp-specialist", ":currentUser='currentUser'"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{6, 2}}, "", "comp-work", ":currentUser='currentUser'"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{7, 1}}, "col-4", "comp-customer"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{8, 1}}, "col-4", "isShowLink", "isClearable"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{9, 1}}, "col-4", "comp-relation"),
			t.GetFldRef("request_id", "запрос", "request", [][]int{{10, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("system_id", "система", "system", [][]int{{10, 2}}, "isShowLink", "isClearable"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{11, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("functional_requirement_id", "функциональное требование", "functional_requirement", [][]int{{11, 2}}, "isShowLink", "isClearable"),
			t.GetFldRef("bug_id", "баг", "bug", [][]int{{12, 1}}, "isShowLink", "isClearable"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{13, 1}}, "col-4", "comp-date"),
			t.GetFldDate("plan_start_date", "плановая дата начала", [][]int{{14, 1}}, "col-3"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{14, 2}}, "col-3"),
			//t.GetFldSimpleHtml([][]int{{17, 3}}, "col-2", "<p>История</p>"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{15, 1}}, "col-4", "comp-result"),
			t.GetFldString("result", "результат", 0, [][]int{{16, 1}}, "col-8"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
			FilterList: []t.VueDocListFilter{
				{FldName: "state", IsRef: true, RefTable: "ctlg_task_state"},
				{FldName: "system_id", IsRef: true, RefTable: "system"},
				{FldName: "digital_solution_id", IsRef: true, RefTable: "digital_solution"},
			},
		},
		Templates: map[string]*t.DocTemplate{
			"sql_function_list.sql":      {},
			"sql_function_get_specialist.sql":      {},
			"sql_function_get_specialist_role.sql": {},
			"webClient_index.vue":                  {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"task_get_specialist":      {Name: "task_get_specialist"},
				"task_get_specialist_role": {Name: "task_get_specialist_role"},
			},
		},
	}
	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)

	doc.Vue.AddFixedSaveBtn()

	doc.AddVueComposition("docItem", "executor")
	doc.AddVueComposition("docItem", "specialist")
	doc.AddVueComposition("docItem", "work")
	doc.AddVueComposition("docItem", "customer")
	doc.AddVueComposition("docItem", "relation")
	doc.AddVueComposition("docItem", "date")
	doc.AddVueComposition("docItem", "result")

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	doc.Vue.TmplFuncs = map[string]func(t.DocType) string{
		// шаблон названия в списке
		"PrintListRowLabel": func(docType t.DocType) string {
			return `
				 <q-item-section>
				    <q-item-label lines="1">{{item.title}}</q-item-label>
					<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge> <q-badge>{{item.options.title.system_title}}</q-badge></q-item-label>
				 </q-item-section>
			`
		},
	}

	return doc
}

package request

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "request"
	name_ru         = "запрос"
	name_ru_plural  = "запросы"
	menu_icon       = "image/request.svg"
	breadcrumb_icon = "far fa-lightbulb"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldRef("state_id", "статус", "ctlg_request_state", [][]int{{1, 2}}, "col-4").SetDefault("1"),
			t.GetFldString("description", "описание", 0, [][]int{{2, 1}}, "col-8"),
			t.GetFldString("how_request_received", "как получен запрос", 0, [][]int{{3, 1}}),
			t.GetFldDateTime("datetime_reciept", "дата и время получения запроса", [][]int{{3, 2}}),
			t.GetFldJsonbCompositionWithoutFld([][]int{{4, 1}}, "col-4", "comp-specandtask"),
			t.GetFldSimpleHtml([][]int{{5, 1}}, "", "<p>Специалисты</p>"),
			// Задачи. Описан под doc.Init {{5, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{6, 1}}, "col-4", "comp-customer"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{7, 1}}, "isShowLink", "isClearable"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{7, 2}}, "", "comp-customerAgent", ":currentUser='currentUser'"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{8, 1}}, "col-4", "comp-relation"),
			t.GetFldRef("system_id", "система", "system", [][]int{{9, 1}}, "isShowLink", "isClearable", "ext: {customer_id: item.customer_id}"),
			// Функциональные требования. Описан под doc.Init {{9, 2}}
			t.GetFldString("result", "результат", 0, [][]int{{10, 1}}, "col-8"),
			t.GetFldInt("system_sequence", "последовательность в системе", [][]int{{11, 1}}),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
			FilterList: []t.VueDocListFilter{
				{FldName: "priority_id", IsRef: true, RefTable: "ctlg_request_priority"},
				{FldName: "digital_solution_id", IsRef: true, RefTable: "digital_solution"},
			},
		},
		Templates:   map[string]*t.DocTemplate{
			"sql_function_list.sql": {},
			"sql_function_change_system_sequence.sql": {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"request_change_system_sequence": {Name: "request_change_system_sequence"},
			},
		},
	}

	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)

	doc.AddVueComposition("docItem", "customerAgent")
	doc.AddVueComposition("docItem", "relation")
	doc.AddVueComposition("docItem", "specandtask")
	doc.AddVueComposition("docItem", "customer")
	//doc.AddVueComposition("docItem", "date")

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "Функциональные требования",                  // название списка, которе выводится на экране
		FldName:    "ft_list",              // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "functional_requirement",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "request_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/functional_requirement.svg",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{9, 2}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи",                  // название списка, которе выводится на экране
		FldName:    "task_list",              // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "digital_solution_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/task.svg",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
               <q-item-label>{{v.title}}</q-item-label>
           `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{5, 2}}, "col-4").SetVif("currentUser.role?.includes(`admin`)"))

	return doc
}

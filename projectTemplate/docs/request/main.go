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
			t.GetFldRef("priority_id", "приоритет", "ctlg_request_priority", [][]int{{1, 2}}, "col-2"),
			t.GetFldRef("state_id", "статус", "ctlg_request_state", [][]int{{1, 3}}, "col-2").SetDefault("1"),
			t.GetFldString("how_request_received", "как получен запрос", 0, [][]int{{2, 1}}),
			t.GetFldDateTime("datetime_reciept", "дата и время получения запроса", [][]int{{2, 2}}),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{4, 1}}, "col-4", "comp-relation"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{5, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("system_id", "система", "system", [][]int{{5, 2}}, "isShowLink", "isClearable", "ext: {customer_id: item.customer_id}"),
			// контрол с функциональными требованиями описан под doc.Init {{6, 1}}
			// контрол с задачами описан под doc.Init {{6, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{7, 1}}, "col-4", "comp-participant"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{8, 1}}, "", "comp-customerAgent", ":currentUser='currentUser'"),
			t.GetFldString("result", "результат", 0, [][]int{{9, 1}}, "col-8"),
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

	doc.AddVueComposition("docItem", "customerAgent")
	doc.AddVueComposition("docItem", "participant")
	doc.AddVueComposition("docItem", "relation")
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
	}, [][]int{{6, 1}}, "col-4"))

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
	}, [][]int{{6, 2}}, "col-4").SetVif("currentUser.role?.includes(`admin`)"))

	return doc
}

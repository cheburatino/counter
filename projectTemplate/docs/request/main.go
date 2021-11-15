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
			t.GetFldTitle().SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldRef("priority_id", "приоритет", "ctlg_request_priority", [][]int{{1, 2}}, "col-2"),
			t.GetFldRef("state_id", "статус", "ctlg_request_state", [][]int{{1, 3}}, "col-2").SetDefault("1").SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldSimpleHtml([][]int{{2, 1}}, "", "<p>Дата и время создания: {{item.created_at}}</p>"),
			t.GetFldSimpleHtml([][]int{{2, 2}}, "", "<p>Дата и время изменения: {{item.updated_at}}</p>"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldFiles("files", "файлы", [][]int{{4, 1}}, t.FldVueFilesParams{}).SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldImgList("images", "изображения", [][]int{{4, 2}}, t.FldVueImgParams{}).SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldString("how_request_received", "как получен запрос", 0, [][]int{{5, 1}}).SetVif("currentUser.role?.includes(`admin`)"),
			t.GetFldDateTime("datetime_reciept", "дата и время получения запроса", [][]int{{5, 2}}).SetVif("currentUser.role?.includes(`admin`)"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{6, 1}}, "col-4", "comp-executor"),
			t.GetFldSimpleHtml([][]int{{7, 1}}, "", "<p>Специалисты</p>"),
			// Задачи. Описание контрола под doc.Init {{7, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{8, 1}}, "col-4", "comp-customer"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{9, 1}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{10, 1}}, "", "comp-customerAgent", ":currentUser='currentUser'"),
			// Задачи заказчика. Описание контрола под doc.Init {{10, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{11, 1}}, "col-4", "comp-relation"),
			t.GetFldRef("system_id", "система", "system", [][]int{{12, 1}}, "isShowLink", "isClearable", "ext: {customer_id: item.customer_id}").SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			// Функциональные требования. Описан под doc.Init {{12, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{13, 1}}, "col-4", "comp-result"),
			t.GetFldString("result", "результат", 0, [][]int{{14, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
			FilterList: []t.VueDocListFilter{
				{FldName: "state_id", IsRef: true, RefTable: "ctlg_request_state"},
				{FldName: "system_id", IsRef: true, RefTable: "system"},
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

	doc.Vue.AddFixedSaveBtn()

	doc.AddVueComposition("docItem", "customerAgent")
	doc.AddVueComposition("docItem", "relation")
	doc.AddVueComposition("docItem", "executor")
	doc.AddVueComposition("docItem", "customer")
	doc.AddVueComposition("docItem", "result")
	//doc.AddVueComposition("docItem", "date")

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
					<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge></q-item-label>
				 </q-item-section>
			`
		},
	}

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
	}, [][]int{{7, 2}}, "col-4").SetVif("currentUser.role?.includes(`admin`)"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи заказчика",        // название списка, которе выводится на экране
		FldName:    "customer_task_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "customer_task",           // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "digital_solution_id",     // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/customer_task.png", // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{10, 2}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "функциональные требования",                  // название списка, которе выводится на экране
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
	}, [][]int{{12, 2}}, "col-4"))

	return doc
}

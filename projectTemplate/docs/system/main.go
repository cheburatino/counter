package system

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "system"
	name_ru         = "система"
	name_ru_plural  = "системы"
	menu_icon       = "image/system.svg"
	breadcrumb_icon = "fas fa-project-diagram"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldString("state", "статус", 50, [][]int{{1, 2}}),
			t.GetFldSimpleHtml([][]int{{2, 1}}, "", "<p>Дата и время создания: {{item.created_at}}</p>"),
			t.GetFldSimpleHtml([][]int{{2, 2}}, "", "<p>Дата и время изменения: {{item.updated_at}}</p>"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("files", "файлы", [][]int{{4, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("images", "изображения", [][]int{{4, 2}}, t.FldVueImgParams{}),
			t.GetFldJsonbCompositionWithoutFld([][]int{{5, 1}}, "col-4", "comp-executor"),
			t.GetFldSimpleHtml([][]int{{6, 1}}, "", "<p>Специалисты</p>"),
			// Задачи. Описание контрола после doc.Init {{6, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{7, 1}}, "col-4", "comp-customer"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{8, 1}}, "isShowLink", "isClearable"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{9, 1}}, "", "comp-customerAgent", ":currentUser='currentUser'"),
			// Задачи заказчика. Описание контрола после doc.Init {{9, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{10, 1}}, "col-4", "comp-relation"),
			// Запросы. Описание контрола после doc.Init {{11, 1}}
			// Функциональные требования. Описание контрола после doc.Init {{11, 2}}
			// Цифровые решения. Описание контрола после doc.Init {{12, 1}}
			// Баги. Описание контрола после doc.Init {{12, 2}}
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
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

	doc.AddVueComposition("docItem", "executor")
	doc.AddVueComposition("docItem", "customer")
	doc.AddVueComposition("docItem", "customerAgent")
	doc.AddVueComposition("docItem", "relation")

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи",                  // название списка, которе выводится на экране
		FldName:    "task_list",              // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "system_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/task.svg",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
	           <q-item-label>{{v.title}}</q-item-label>
	           <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
	       `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{6, 2}}, "col-4"))

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
	}, [][]int{{9, 2}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "запросы",                  // название списка, которе выводится на экране
		FldName:    "request_list",             // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "request",                  // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "system_id", 				// название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/request.svg",        // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{11, 1}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "функциональные требования",                // название списка, которе выводится на экране
		FldName:    "ft_list",              					// название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "functional_requirement",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "system_id", 								// название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/functional_requirement.svg",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.system_id}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{11, 2}}, "col-4"))
	//<q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "цифровые решения",                  // название списка, которе выводится на экране
		FldName:    "digital_solution_list",              // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "digital_solution",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "system_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/digital_solution.svg",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{12, 1}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "баги",                  // название списка, которе выводится на экране
		FldName:    "bug_list",              // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "bug",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "system_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/bug.png",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
	           <q-item-label>{{v.title}}</q-item-label>
	           <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
	       `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{12, 2}}, "col-4"))

	return doc
}

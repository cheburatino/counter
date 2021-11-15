package functionalRequirement

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "functional_requirement"
	name_ru         = "функциональное требование"
	name_ru_plural  = "функциональные требования"
	menu_icon       = "image/functional_requirement.svg"
	breadcrumb_icon = "fas fa-square-root-alt"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldRef("state_id", "статус", "ctlg_functional_requirement_state", [][]int{{1, 2}}).SetDefault("1"),
			t.GetFldString("description", "описание", 0, [][]int{{2, 1}}, "col-8"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{3, 1}}, "col-4", "comp-executor"),
			t.GetFldSimpleHtml([][]int{{4, 1}}, "", "<p>Специалисты</p>"),
			// Задачи. Описание контрола после doc.Init {{4, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{5, 1}}, "col-4", "comp-customer"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{6, 1}}, "isShowLink", "isClearable"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{6, 2}}, "", "comp-customerAgent", ":currentUser='currentUser'"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{7, 1}}, "col-4", "comp-relation"),
			t.GetFldRef("request_id", "запрос", "request", [][]int{{8, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("system_id", "система", "system", [][]int{{8, 2}}, "isShowLink", "isClearable"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{9, 1}}, "isShowLink", "isClearable"),
			// Баги. Описание контрола после doc.Init {{9, 2}}
			t.GetFldString("result", "результат", 0, [][]int{{10, 1}}, "col-8"),
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
	doc.AddVueComposition("docItem", "customerAgent")
	doc.AddVueComposition("docItem", "customer")
	doc.AddVueComposition("docItem", "relation")

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
					<q-item-label caption>
						<q-item-label caption><q-badge>{{item.options.title.state_title}}</q-badge></q-item-label>
					</q-item-label>
				 </q-item-section>
			`
		},
	}
	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи",                  // название списка, которе выводится на экране
		FldName:    "task_list",              // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "functional_requirement_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/bug.png",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
               <q-item-label>{{v.title}}</q-item-label>
               <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
           `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{4, 2}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "баги",                  // название списка, которе выводится на экране
		FldName:    "bug_list",              // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "bug",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "functional_requirement_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/bug.png",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
               <q-item-label>{{v.title}}</q-item-label>
               <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
           `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{9, 2}}, "col-4"))


	return doc
}

package digitalSolution

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "digital_solution"
	name_ru         = "цифровое решение"
	name_ru_plural  = "цифровые решения"
	menu_icon       = "image/digital_solution.svg"
	breadcrumb_icon = "fas fa-rocket"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldRef("state_id", "статус", "ctlg_digital_solution_state", [][]int{{1, 2}}, "col-2").SetDefault("1"),
			t.GetFldRef("sprint_id", "спринт", "sprint", [][]int{{1, 3}}, "col-2", "isShowLink", "isClearable").SetVif("item.state_id === 4 || item.state_id === 5 || item.state_id === 6"),
			t.GetFldSimpleHtml([][]int{{2, 1}}, "", "<p>Дата и время создания: {{item.created_at}}</p>"),
			t.GetFldSimpleHtml([][]int{{2, 2}}, "", "<p>Дата и время изменения: {{item.updated_at}}</p>"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			//t.GetFldSimpleHtml([][]int{{4, 1}}, "", "<p>Здесь должны быть контролы с функциональными требованиями и задачами.</p>"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{5, 1}}, "col-4", "comp-participants"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{6, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("rsk_id", "рск", "man", [][]int{{6, 2}}, "isShowLink", "isClearable", "ext: {company_id: 1}"),
			t.GetFldRef("system_id", "система", "system", [][]int{{7, 1}}, "isShowLink", "isClearable", "ext: {customer_id: item.customer_id}"),
			t.GetFldRef("analyst_id", "аналитик", "man", [][]int{{7, 2}}, "isShowLink", "isClearable", "ext: {company_id: 1}"),
			t.GetFldRef("client_agent_id", "представитель заказчика", "man", [][]int{{8, 1}}, "isShowLink", "isClearable", "ext: {company_id: item.customer_id}"),
			t.GetFldRef("team_lead_id", "тимлид", "man", [][]int{{8, 2}}, "isShowLink", "isClearable", "ext: {company_id: 1}"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{9, 1}}, "col-4", "comp-modeling"),
			t.GetFldDate("date_plan_start_modeling", "планируемая дата начала моделирования", [][]int{{10, 1}}, "col-4"),
			t.GetFldDate("date_fact_start_modeling", "фактическая дата начала моделирования", [][]int{{10, 2}}, "col-4"),
			t.GetFldString("model", "описание модели", 0, [][]int{{11, 1}}, "col-8"),
			t.GetFldDate("date_plan_end_modeling", "планируемая дата завершения моделирования", [][]int{{12, 1}}, "col-4"),
			t.GetFldDate("date_fact_end_modeling", "фактическая дата завершения моделирования", [][]int{{12, 2}}, "col-4"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{13, 1}}, "col-4", "comp-realization"),
			t.GetFldDate("date_plan_start_realization", "планируемая дата начала реализации", [][]int{{14, 1}}, "col-4"),
			t.GetFldDate("date_fact_start_realization", "фактическая дата начала реализации", [][]int{{14, 2}}, "col-4"),
			t.GetFldDate("date_plan_end_realization", "планируемая дата завершения реализации", [][]int{{15, 1}}, "col-4"),
			t.GetFldDate("date_fact_end_realization", "фактическая дата завершения реализации", [][]int{{15, 2}}, "col-4"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates: map[string]*t.DocTemplate{
			"sql_function_worked_time.sql": {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"digital_solution_worked_time": {Name: "digital_solution_worked_time"},
			},
		},
	}

	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)
	doc.Vue.AddFixedSaveBtn()

	doc.AddVueComposition("docItem", "participants")
	doc.AddVueComposition("docItem", "modeling")
	doc.AddVueComposition("docItem", "realization")

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "Функциональные требования",                  // название списка, которе выводится на экране
		FldName:    "ft_list",              // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "functional_requirement",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "digital_solution_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/functional_requirement.svg",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{4, 1}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи",                  // название списка, которе выводится на экране
		FldName:    "task_list",              // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",                   // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "digital_solution_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/task.svg",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
			t.GetFldRef("type_id", "тип задачи", "ctlg_task_type", [][]int{{2, 2}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-caption>{{v.state}}</q-item-caption>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{4, 2}}, "col-4"))

	return doc
}

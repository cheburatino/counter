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
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle().SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldRef("state_id", "статус", "ctlg_digital_solution_state", [][]int{{1, 2}}).SetDefault("1").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldSimpleHtml([][]int{{2, 1}}, "", "<p>Дата и время создания: {{item.created_at}}</p>"),
			t.GetFldSimpleHtml([][]int{{2, 2}}, "", "<p>Дата и время изменения: {{item.updated_at}}</p>"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldFiles("files", "файлы", [][]int{{4, 1}}, t.FldVueFilesParams{}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldImgList("images", "изображения", [][]int{{4, 2}}, t.FldVueImgParams{}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{5, 1}}, "col-4", "comp-executor"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{6, 1}}, "", "comp-specialist", ":currentUser='currentUser'"),
			// Задачи. Контрол описан после doc.Init {{6, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{7, 1}}, "col-4", "comp-customer"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{8, 1}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{9, 1}}, "", "comp-customerAgent", ":currentUser='currentUser'"),
			// Задачи заказчика. Контрол описан после doc.Init {{9, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{10, 1}}, "col-4", "comp-relation"),
			t.GetFldRef("system_id", "система", "system", [][]int{{11, 1}}, "isShowLink", "isClearable", "ext: {customer_id: item.customer_id}").SetReadonly("currentUser.role?.includes(`customer`)"),
			// Функциональные требования. Контрол описан после oc.Init {{12, 1}}
			// Баги. Контрол описан после oc.Init {{12, 2}}
			t.GetFldJsonbCompositionWithoutFld([][]int{{13, 1}}, "col-4", "comp-modeling"),
			t.GetFldDate("date_plan_start_modeling", "планируемая дата начала моделирования", [][]int{{14, 1}}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldDate("date_plan_end_modeling", "планируемая дата завершения моделирования", [][]int{{14, 2}}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldString("model", "описание модели", 0, [][]int{{15, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{16, 1}}, "col-4", "comp-realization"),
			t.GetFldDate("date_plan_start_realization", "планируемая дата начала реализации", [][]int{{17, 1}}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldDate("date_plan_end_realization", "планируемая дата завершения реализации", [][]int{{17, 2}}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{18, 1}}, "col-4", "comp-result"),
			t.GetFldString("result", "результат", 0, [][]int{{19, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`)"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates: map[string]*t.DocTemplate{
			"sql_function_get_specialist_role.sql": {},
			"sql_function_get_by_id.sql":           {},
			"sql_function_list.sql": {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"digital_solution_get_specialist_role": {Name: "digital_solution_get_specialist_role"},
			},
		},
	}

	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)
	doc.Vue.AddFixedSaveBtn()

	doc.AddVueComposition("docItem", "executor")
	doc.AddVueComposition("docItem", "customer")
	doc.AddVueComposition("docItem", "relation")
	doc.AddVueComposition("docItem", "specialist")
	doc.AddVueComposition("docItem", "customerAgent")
	doc.AddVueComposition("docItem", "modeling")
	doc.AddVueComposition("docItem", "realization")
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
					<q-item-label caption><q-badge>{{item.options.title.system_title}}</q-badge></q-item-label>
				 </q-item-section>
			`
		},
	}
	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи",              // название списка, которе выводится на экране
		FldName:    "task_list",           // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",                // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "digital_solution_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/task.svg",      // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
			t.GetFldRef("type_id", "тип задачи", "ctlg_task_type", [][]int{{2, 2}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{6, 2}}, "col-4").SetVif("currentUser.role?.includes(`admin`)"))

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
		Label:      "Функциональные требования",        // название списка, которе выводится на экране
		FldName:    "ft_list",                          // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "functional_requirement",           // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "digital_solution_id",              // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/functional_requirement.svg", // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
				<q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{12, 1}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "баги",                      // название списка, которе выводится на экране
		FldName:    "bug_list",                  // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "bug",                       // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "functional_requirement_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/bug.png",             // иконка, которая выводится в списке
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

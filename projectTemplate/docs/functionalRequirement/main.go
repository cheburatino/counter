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
			t.GetFldTitle().SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldCheckbox("paused", "на паузе", [][]int{{1, 2}}, "col-2").SetDefault("false"),
			t.GetFldRef("state_id", "статус", "ctlg_functional_requirement_state", [][]int{{1, 3}}, "col-2").SetDefault("1").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 1}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldRef("request_id", "запрос", "request", [][]int{{2, 2}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{3, 1}}, "col-2").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{3, 2}}, "col-2").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldInt("customer_priority", "приоритет заказчика", [][]int{{3, 3}}, "col-2").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldInt("internal_priority", "внутренний приоритет", [][]int{{3, 4}}, "col-2").SetVif("currentUser.role?.includes(`admin`)"),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldFiles("files", "файлы", [][]int{{5, 1}}, t.FldVueFilesParams{}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldImgList("images", "изображения", [][]int{{5, 2}}, t.FldVueImgParams{}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldString("description_for_dev", "описание для разработки", 0, [][]int{{6, 1}}, "col-8").SetVif("!currentUser.role?.includes(`customer`)"),
			t.GetFldFiles("files_for_dev", "файлы для разработки", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("images_for_dev", "изображения для разработки", [][]int{{7, 2}}, t.FldVueImgParams{}).SetReadonly("currentUser.role?.includes(`customer`)"),
			// Задачи. Описание контрола после doc.Init {{8, 1}}
			// Баги. Описание контрола после doc.Init {{8, 2}}
			//t.GetFldJsonbCompositionWithoutFld([][]int{{7, 1}}, "col-4", "comp-executor"),
			//t.GetFldSimpleHtml([][]int{{8, 1}}, "", "<p>Специалисты</p>"),
			//t.GetFldJsonbCompositionWithoutFld([][]int{{9, 1}}, "col-4", "comp-customer"),
			//t.GetFldRef("customer_id", "заказчик", "company", [][]int{{10, 1}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			//t.GetFldJsonbCompositionWithoutFld([][]int{{11, 1}}, "", "comp-customerAgent", ":currentUser='currentUser'").SetReadonly("currentUser.role?.includes(`customer`)"),
			//t.GetFldJsonbCompositionWithoutFld([][]int{{12, 1}}, "col-4", "comp-relation"),
			//t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{14, 1}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			//t.GetFldJsonbCompositionWithoutFld([][]int{{15, 1}}, "col-4", "comp-result"),
			t.GetFldString("result", "результат", 0, [][]int{{9, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldFiles("result_file", "файлы результата", [][]int{{10, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_image", "изображения результата", [][]int{{10, 2}}, t.FldVueImgParams{}),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
			FilterList: []t.VueDocListFilter{
				{FldName: "state_id", IsRef: true, RefTable: "ctlg_functional_requirement_state"},
				{FldName: "system_id", IsRef: true, RefTable: "system"},
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

	doc.Vue.AddFixedSaveBtn()

	//doc.AddVueComposition("docItem", "executor")
	//doc.AddVueComposition("docItem", "customer")
	//doc.AddVueComposition("docItem", "customerAgent")
	//doc.AddVueComposition("docItem", "relation")
	//doc.AddVueComposition("docItem", "result")

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
						<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge> <q-badge>{{item.options.title.system_title}}</q-badge></q-item-label>
						<q-item-label caption>Плановая дата завершения: {{item.plan_end_date}}</q-item-label>
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
		Avatar:     "image/task.svg",         // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
               <q-item-label>{{v.title}}</q-item-label>
               <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
           `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{8, 1}}, "col-4").SetVif("currentUser.role?.includes(`admin`)"))

	//doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
	//	Label:      "задачи заказчика",        // название списка, которе выводится на экране
	//	FldName:    "customer_task_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
	//	TableName:  "customer_task",           // название связанной таблицы, из которой будут выгружаться записи
	//	RefFldName: "functional_requirement_id",     // название поля в связанной таблицы, по которому осуществляется связь
	//	Avatar:     "image/customer_task.png", // иконка, которая выводится в списке
	//	NewFlds: []t.FldType{
	//		t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
	//	}, // список полей, которые заполняются при добавлении новой записи
	//	TitleTemplate: `
    //            <q-item-label>{{v.title}}</q-item-label>
    //            <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
    //        `, // шаблон для названия в списке (vue синтаксис)
	//}, [][]int{{6, 2}}, "col-4"))

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
	}, [][]int{{8, 2}}, "col-4"))


	return doc
}

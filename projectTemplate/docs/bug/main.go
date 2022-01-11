package bug

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "bug"
	name_ru         = "баг"
	name_ru_plural  = "баги"
	menu_icon       = "image/bug.png"
	breadcrumb_icon = "fas fa-exclamation-triangle"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle().SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldRef("state_id", "статус", "ctlg_bug_state", [][]int{{1, 2}}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 1}},  "col-2", "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldRef("functional_requirement_id", "функциональное требование", "functional_requirement", [][]int{{2, 2}},"col-2", "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{2, 3}}, "col-2"),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{2, 4}}, "col-2"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldFiles("files", "файлы", [][]int{{4, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("images", "изображения", [][]int{{4, 2}}, t.FldVueImgParams{}),
			// Задачи. Контрол описан после doc.Init {{5, 1}}
			t.GetFldString("result", "результат", 0, [][]int{{6, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldFiles("result_files", "файлы результата", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результата", [][]int{{7, 2}}, t.FldVueImgParams{}),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
			FilterList: []t.VueDocListFilter{
				{FldName: "state", IsRef: true, RefTable: "ctlg_work_state"},
				{FldName: "system_id", IsRef: true, RefTable: "system"},
				{FldName: "digital_solution_id", IsRef: true, RefTable: "digital_solution"},
			},
		},
		Templates:   map[string]*t.DocTemplate{
			"sql_function_list.sql": {},
			"webClient_comp_index.vue": {},
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

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи",              // название списка, которе выводится на экране
		FldName:    "task_list",           // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",                // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "bug_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/task.svg",      // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
			t.GetFldRef("type_id", "тип задачи", "ctlg_task_type", [][]int{{2, 2}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{5, 1}}, "col-4"))

	//doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
	//	Label:      "задачи заказчика",        // название списка, которе выводится на экране
	//	FldName:    "customer_task_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
	//	TableName:  "customer_task",           // название связанной таблицы, из которой будут выгружаться записи
	//	RefFldName: "bug_id",     // название поля в связанной таблицы, по которому осуществляется связь
	//	Avatar:     "image/customer_task.png", // иконка, которая выводится в списке
	//	NewFlds: []t.FldType{
	//		t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
	//	}, // список полей, которые заполняются при добавлении новой записи
	//	TitleTemplate: `
    //            <q-item-label>{{v.title}}</q-item-label>
    //            <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
    //        `, // шаблон для названия в списке (vue синтаксис)
	//}, [][]int{{9, 2}}, "col-4"))

	return doc
}

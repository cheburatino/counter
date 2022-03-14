package functionalRequirement

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "functional_requirement"
	name_ru         = "функциональность"
	name_ru_plural  = "функциональность"
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
			t.GetFldRef("system_id", "система", "system", [][]int{{1, 2}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("state_id", "статус", "ctlg_functional_requirement_state", [][]int{{1, 3}}, "col-2").SetDefault("1"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{2, 1}}, "isShowLink", "isClearable"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{2, 2}}, "col-2"),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{2, 3}}, "col-2"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("description_files", "файлы описания", [][]int{{4, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("description_images", "изображения описания", [][]int{{4, 2}}, t.FldVueImgParams{}),
			//t.GetFldString("description_for_dev", "описание для разработки", 0, [][]int{{5, 1}}, "col-8"),
			//t.GetFldFiles("files_for_dev", "файлы для разработки", [][]int{{6, 1}}, t.FldVueFilesParams{}),
			//t.GetFldImgList("images_for_dev", "изображения для разработки", [][]int{{6, 2}}, t.FldVueImgParams{}),
			// Задачи. Описание контрола после doc.Init {{5, 1}}
			// Баги. Описание контрола после doc.Init {{5, 2}}
			t.GetFldString("result", "результат", 0, [][]int{{6, 1}}, "col-8"),
			t.GetFldFiles("result_files", "файлы результата", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результата", [][]int{{7, 2}}, t.FldVueImgParams{}),
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
		//Templates:   map[string]*t.DocTemplate{},
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
					<q-item-label caption>
						<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge> <q-badge>{{item.options.title.system_title}}</q-badge></q-item-label>
						<q-item-label caption>Плановая дата завершения: {{item.plan_end_date}}</q-item-label>
					</q-item-label>
				 </q-item-section>
			`
		},
	}
	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи",                 		// название списка, которе выводится на экране
		FldName:    "task_list",              		// название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",                   		// название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "functional_requirement_id", 	// название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/task.svg",         		// иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
               <q-item-label>{{v.title}}</q-item-label>
               <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
           `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{5, 1}}, "col-4").SetVif("currentUser.role?.includes(`admin`)"))

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
	}, [][]int{{5, 2}}, "col-4"))

	return doc
}

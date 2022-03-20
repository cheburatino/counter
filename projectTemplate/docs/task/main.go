package task

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "task"
	name_ru         = "задача"
	name_ru_plural  = "задачи"
	menu_icon       = "image/task.svg"
	breadcrumb_icon = "fas fa-clipboard-check"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle().SetIsNotUniq(),
			t.GetFldCheckbox("needs_discussion", "требует обсуждения", [][]int{{1, 2}}, "col-2").SetDefault("false"),
			t.GetFldRef("state_id", "статус", "ctlg_task_state", [][]int{{1, 3}}, "col-2").SetDefault("1"),
			t.GetFldRef("type_id", "тип задачи", "ctlg_task_type", [][]int{{2, 1}}, "col-2"),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 2}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{2, 3}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("development_task_id", "задача на разработку", "development_task", [][]int{{2, 4}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("executor_id", "исполнитель", "man", [][]int{{3, 1}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldInt("estimate", "оценка", [][]int{{3, 2}}, "col-1"),
			t.GetFldInt("worked_time", "затрачено", [][]int{{3, 3}}, "col-1"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{3, 4}}, "col-2"),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{3, 5}}, "col-2"),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8"),
			t.GetFldFiles("files", "файлы", [][]int{{5, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("images", "изображения", [][]int{{5, 2}}, t.FldVueImgParams{}),
			t.GetFldString("process", "процесс", 0, [][]int{{6, 1}}, "col-8"),
			t.GetFldFiles("process_files", "файлы результата", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("process_images", "изображения результата", [][]int{{7, 2}}, t.FldVueImgParams{}),
			t.GetFldString("result", "результат", 0, [][]int{{8, 1}}, "col-8"),
			t.GetFldFiles("result_files", "файлы результата", [][]int{{9, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результата", [][]int{{9, 2}}, t.FldVueImgParams{}),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
			FilterList: []t.VueDocListFilter{
				{FldName: "state", IsRef: true, RefTable: "ctlg_task_state"},
				{FldName: "system_id", IsRef: true, RefTable: "system"},
				{FldName: "digital_solution_id", IsRef: true, RefTable: "digital_solution"},
			},
		},
		Templates: map[string]*t.DocTemplate{
			"sql_function_list.sql":                {},
			"sql_function_get_specialist.sql":      {},
			"sql_function_get_specialist_role.sql": {},
			"webClient_index.vue":                  {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"task_get_specialist":      {Name: "task_get_specialist"},
				"task_get_specialist_role": {Name: "task_get_specialist_role"},
			},
		},
	}
	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)

	doc.Vue.AddFixedSaveBtn()

	//doc.AddVueComposition("docItem", "executor")
	//doc.AddVueComposition("docItem", "specialist")
	//doc.AddVueComposition("docItem", "work")
	//doc.AddVueComposition("docItem", "customer")
	//doc.AddVueComposition("docItem", "relation")
	//doc.AddVueComposition("docItem", "date")
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
						<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge> <q-badge color="primary">{{item.options.title.system_title}}</q-badge> <q-badge color="light-blue-3">{{item.options.title.executor_title}}</q-badge> <q-badge color="yellow-5">{{item.options.title.digital_solution_title}}</q-badge> <q-badge color="info">{{item.plan_end_date}}</q-badge></q-item-label>
					</q-item-label>
				 </q-item-section>
			`
		},
	}

	return doc
}

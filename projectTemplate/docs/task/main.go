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
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldRef("state", "статус", "ctlg_task_state", [][]int{{1, 2}}).SetDefault("1"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{2, 1}}, "col-4", "isShowLink"),
			t.GetFldRef("type_id", "тип задачи", "ctlg_task_type", [][]int{{2, 2}}).SetIsRequired(),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("files", "файлы", [][]int{{4, 1}}, t.FldVueFilesParams{MaxFileSize: 10000}),
			t.GetFldImgList("images", "изображения", [][]int{{4, 2}}, t.FldVueImgParams{}),
			t.GetFldRef("author_id", "автор", "man", [][]int{{5, 1}}, "isShowLink", "isClearable", "ext: {company_id: 1}"),
			t.GetFldRef("director_id", "постановщик", "man", [][]int{{5, 2}}, "isShowLink", "isClearable", "ext: {company_id: 1}"),
			t.GetFldRef("executor_id", "исполнитель", "man", [][]int{{6, 1}}, "isShowLink", "isClearable", "ext: {company_id: 1}"),
			t.GetFldRef("acceptor_id", "приёмщик", "man", [][]int{{6, 2}}, "isShowLink", "isClearable", "ext: {company_id: 1}"),
			t.GetFldDate("plan_start_date", "плановая дата начала", [][]int{{7, 1}}),
			t.GetFldDate("fact_start_date", "фактическая дата начала", [][]int{{7, 2}}),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{8, 1}}),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{8, 2}}),
			t.GetFldString("result", "результат", 0, [][]int{{9, 1}}, "col-8"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates: map[string]*t.DocTemplate{
			"sql_function_get_statuses_by_status_type.sql": {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"task_get_statuses_by_status_type": {Name: "task_get_statuses_by_status_type"},
			},
		},
	}
	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	return doc
}

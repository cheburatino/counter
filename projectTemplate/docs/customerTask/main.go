package customerTask

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "customer_task"
	name_ru         = "задача заказчика"
	name_ru_plural  = "задачи заказчиков"
	menu_icon       = "image/customer_task.png"
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
			t.GetFldRef("state_id", "статус", "ctlg_customer_task_state", [][]int{{1, 2}}).SetDefault("1"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{2, 1}}, "col-4", "isShowLink"),
			t.GetFldRef("company_id", "компания", "company", [][]int{{2, 2}}),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("files", "файлы", [][]int{{4, 1}}, t.FldVueFilesParams{MaxFileSize: 10000}),
			t.GetFldImgList("images", "изображения", [][]int{{4, 2}}, t.FldVueImgParams{}),
			t.GetFldRef("author_id", "автор", "man", [][]int{{5, 1}}, "isShowLink", "isClearable", "ext: {company_id: 1}"),
			t.GetFldDate("plan_start_date", "плановая дата начала", [][]int{{6, 1}}),
			t.GetFldDate("fact_start_date", "фактическая дата начала", [][]int{{6, 2}}),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{7, 1}}),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{7, 2}}),
			t.GetFldString("result", "результат", 0, [][]int{{8, 1}}, "col-8"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		//Templates: map[string]*t.DocTemplate{},
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

	return doc
}

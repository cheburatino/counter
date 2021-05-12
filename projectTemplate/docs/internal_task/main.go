package internal_task

import (
	t "github.com/pepelazz/projectGenerator/types"
	"github.com/pepelazz/projectGenerator/utils"
)

const (
	name            = "internal_task"
	name_ru         = "внутренняя задача"
	name_ru_plural  = "внутренние задачи"
	menu_icon       = "statics/image/internal_task.svg"
	breadcrumb_icon = "fas fa-clipboard-check"
)

func GetDoc() t.DocType {
	doc := t.DocType{
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldSelectString("status", "статус", 20, [][]int{{1, 2}}, []t.FldVueOptionsItem{
				{Label: "в работе", Value: "in_work"},
				{Label: "завершена", Value: "completed"},
			}),
			t.GetFldString("description", "описание", 0, [][]int{{2, 1}}, "col-8"),
			t.GetFldRef("author_id", "автор", "user", [][]int{{3, 1}}),
			t.GetFldRef("director_id", "постановщик", "user", [][]int{{3, 2}}),
			t.GetFldRef("executor_id", "исполнитель", "user", [][]int{{4, 1}}),
			t.GetFldRef("acceptor_id", "приёмщик", "user", [][]int{{4, 2}}),
			t.GetFldDate("plan_start_date", "плановая дата начала", [][]int{{5, 1}}),
			t.GetFldDate("fact_start_date", "фактическая дата начала", [][]int{{5, 2}}),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{6, 1}}),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{6, 2}}),
			t.GetFldRef("client_id", "заказчик", "client", [][]int{{7, 1}}),
			t.GetFldRef("project_id", "проект", "project", [][]int{{7, 2}}),
			t.GetFldRef("parent_task_id", "родительская задача", "internal_task", [][]int{{8, 1}}, "isShowLink"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		//Templates:   map[string]*t.DocTemplate{"webClient_item.vue": {},},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
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

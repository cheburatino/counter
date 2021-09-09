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

func GetDoc() t.DocType {
	doc := t.DocType{
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldString("description", "описание", 0, [][]int{{2, 1}}, "col-8"),
			t.GetFldRef("modeling_estimate_id", "оценка моделирования", "time", [][]int{{3, 1}}),
			t.GetFldRef("pre_realization_estimate_id", "предварительная оценка реализации", "time", [][]int{{3, 2}}),
			t.GetFldRef("realization_estimate_id", "оценка реализации", "time", [][]int{{3, 2}}),
			t.GetFldRef("sprint_id", "спринт", "sprint", [][]int{{4, 1}}, "col-4"),
			t.GetFldFiles("file", "файлы", [][]int{{5, 1}}, t.FldVueFilesParams{}),
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

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	return doc
}

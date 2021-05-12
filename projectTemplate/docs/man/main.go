package man

import (
	t "github.com/pepelazz/projectGenerator/types"
	"github.com/pepelazz/projectGenerator/utils"
)

const (
	name            = "man"
	name_ru         = "человек"
	name_ru_plural  = "люди"
	menu_icon       = "statics/image/man.svg"
	breadcrumb_icon = "fas fa-male"
)

func GetDoc() t.DocType {
	doc := t.DocType{
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldString("last_name", "фамилия", 30, [][]int{{2, 1}}, "col-3"),
			t.GetFldString("name", "имя", 30, [][]int{{2, 2}}, "col-3"),
			t.GetFldString("middle_name", "отчество", 30, [][]int{{2, 3}}, "col-3"),
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

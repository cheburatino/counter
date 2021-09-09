package time

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "time"
	name_ru         = "время"
	name_ru_plural  = "время"
	menu_icon       = "image/time_fast.svg"
	breadcrumb_icon = "fas fa-building"
)

func GetDoc() t.DocType {
	doc := t.DocType{
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldInt("minute", "кол-во минут", [][]int{{2, 1}}),
			t.GetFldRef("specialist_id", "специалист", "employee", [][]int{{2, 2}}),
			t.GetFldRef("task_id", "задача", "task", [][]int{{3, 1}}),
			t.GetFldRef("type_id", "тип времени", "ctlg_time_type", [][]int{{4, 1}}),
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

package request

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "request"
	name_ru         = "запрос"
	name_ru_plural  = "запросы"
	menu_icon       = "image/request.svg"
	breadcrumb_icon = "far fa-lightbulb"
)

func GetDoc() t.DocType {
	doc := t.DocType{
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle("col-4"),
			t.GetFldRef("system_id", "система", "system", [][]int{{1, 2}}, "col-4"),
			t.GetFldString("description", "описание", 0, [][]int{{2, 1}}, "col-8"),
			t.GetFldRef("state_id", "статус", "ctlg_request_state", [][]int{{3, 1}}, "col-4"),
			t.GetFldRef("rsk_id", "рск", "man", [][]int{{3, 2}}, "col-4"),
			t.GetFldDateTime("datetime_reciept", "дата и время получения запроса", [][]int{{4, 1}}, "col-4"),
			t.GetFldString("how_request_received", "как получен запрос", 0, [][]int{{4, 2}}, "col-4"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{5, 1}}, "col-4"),
			t.GetFldRef("customer_agent_id", "представитель заказчика", "man", [][]int{{5, 2}}, "col-4"),
			t.GetFldString("demo_functional_requirement_id", "функциональные требования", 0, [][]int{{6, 1}}, "col-4"),
			t.GetFldString("demo_task_id", "задачи", 0, [][]int{{6, 2}}, "col-4"),
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

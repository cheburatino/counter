package planDateChange

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "plan_date_change"
	name_ru         = "изменение плановой даты"
	name_ru_plural  = "изменения плановой даты"
	menu_icon       = "image/plan_date_change.png"
	breadcrumb_icon = "fas fa-list-ul"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitleComputed("new.id || ' ' || new.direction"),
			t.GetFldRef("task_id", "задача", "task", [][]int{{1, 2}}, "isShowLink", "isClearable"),
			t.GetFldInt("work_day_quantity", "кол-во рабочих дней", [][]int{{2, 1}}),
			t.GetFldSelectString("direction", "направление", 20, [][]int{{2, 2}}, []t.FldVueOptionsItem{
				{Label: "ускорение", Value: "boost", Color: "positive"},
				{Label: "замедление", Value: "slowdown", Color: "negative"},
			}),
			t.GetFldDate("old_plan_date", "старая дата", [][]int{{3, 1}}),
			t.GetFldDate("new_plan_date", "новая дата", [][]int{{3, 2}}),
			t.GetFldString("reason", "причина", 0, [][]int{{4, 1}}, "col-8"),
			t.GetFldRef("side_id", "на чьей стороне причина", "ctlg_plan_date_change_side", [][]int{{5, 1}}),
			t.GetFldCheckbox("customer_confirm", "подтверждено заказчиком", [][]int{{6, 1}}).SetDefault("false"),
			t.GetFldDateTime("customer_confirm_datetime", "дата и время подтверждения заказчиком", [][]int{{7, 1}}),
			t.GetFldRef("author_id", "автор", "user", [][]int{{8, 1}}, "isShowLink", "isClearable"),
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

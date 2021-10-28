package invoice

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "invoice"
	name_ru         = "счёт"
	name_ru_plural  = "счета"
	menu_icon       = "image/invoice.svg"
	breadcrumb_icon = "fas fa-file-invoice-dollar"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldInt("total_amount", "сумма", [][]int{{1, 2}}, "col-2"),
			t.GetFldSelectString("state", "статус", 30, [][]int{{1, 3}}, []t.FldVueOptionsItem{
				{Label: "запланирован", Value: "planned"},
				{Label: "выставлен", Value: "transferred"},
				{Label: "оплачен", Value: "paid"},
			}, "col-2"),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 1}}, "col-3"),
			t.GetFldRef("payer_id", "плательщик", "counterparty", [][]int{{2, 2}}, "col-3"),
			t.GetFldRef("recipient_id", "получатель", "counterparty", [][]int{{2, 3}}, "col-3"),
			t.GetFldDate("date_plan_transfer", "планируемая дата выставления", [][]int{{3, 1}}, "col-2"),
			t.GetFldDate("date_plan_paid", "планируемая дата оплаты", [][]int{{3, 2}}, "col-2"),
			t.GetFldDate("date_transfer", "дата выставления", [][]int{{3, 3}}, "col-2"),
			t.GetFldDate("date_paid", "дата оплаты", [][]int{{3, 4}}, "col-2"),
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

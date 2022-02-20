package payment

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "payment"
	name_ru         = "платёж"
	name_ru_plural  = "платежи"
	menu_icon       = "image/payment.png"
	breadcrumb_icon = "fas fa-list-ul"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle("col-2"),
			t.GetFldInt("amount", "размер платежа", [][]int{{1, 2}}, "col-2"),
			t.GetFldDate("payment_date", "дата платежа", [][]int{{1, 3}}, "col-2"),
			t.GetFldDate("payment_receipt_date", "дата поступления платежа", [][]int{{1, 4}}, "col-2"),
			t.GetFldRef("invoice_id", "счёт", "invoice", [][]int{{2, 1}}, "isShowLink", "isClearable"),
			t.GetFldFiles("payment_order", "платёжное поручение", [][]int{{2, 2}}, t.FldVueFilesParams{}),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
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

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
			t.GetFldInt("amount", "сумма", [][]int{{1, 2}}, "col-2"),
			t.GetFldRef("state_id", "статус", "ctlg_invoice_state", [][]int{{1, 3}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("technical_task_id", "техническое задание", "technical_task", [][]int{{2, 1}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldDate("date_plan_paid", "планируемая дата оплаты", [][]int{{2, 2}}, "col-2"),
			t.GetFldDate("date_transfer", "дата выставления", [][]int{{2, 3}}, "col-2"),
			t.GetFldDate("date_paid", "дата оплаты", [][]int{{2, 4}}, "col-2"),
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

	doc.Vue.TmplFuncs = map[string]func(t.DocType) string{
		// шаблон названия в списке
		"PrintListRowLabel": func(docType t.DocType) string {
			return `
				 <q-item-section>
				    <q-item-label lines="1">{{item.title}}</q-item-label>
					<q-item-label caption>
						<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge></q-item-label>
						<q-item-label caption>Сумма: {{item.amount}}</q-item-label>
					</q-item-label>
				 </q-item-section>
			`
		},
	}

	return doc
}

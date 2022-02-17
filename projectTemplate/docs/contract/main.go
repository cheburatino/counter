package contract

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "contract"
	name_ru         = "договор"
	name_ru_plural  = "договоры"
	menu_icon       = "image/contract.svg"
	breadcrumb_icon = "fas fa-file-signature"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldDate("date", "дата", [][]int{{1, 2}}),
			t.GetFldString("description", "описание", 0, [][]int{{2, 1}}, "col-8"),
			t.GetFldFiles("draft", "черновик", [][]int{{3, 1}}, t.FldVueFilesParams{}),
			t.GetFldFiles("signed", "подписанный", [][]int{{3, 2}}, t.FldVueFilesParams{}),
			t.GetFldRef("counterparty_id", "контрагент", "counterparty", [][]int{{4, 1}}, "isShowLink", "isClearable"),
			t.GetFldSelectString("state", "статус", 30, [][]int{{5, 1}}, []t.FldVueOptionsItem{
				{Label: "подготовка", Value: "preparation"},
				{Label: "согласование", Value: "approval"},
				{Label: "подписан", Value: "signed"},
			}, "col-2"),
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

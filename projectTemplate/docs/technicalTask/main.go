package technicalTask

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "technical_task"
	name_ru         = "техническое задание"
	name_ru_plural  = "технические задания"
	menu_icon       = "image/technical_task.svg"
	breadcrumb_icon = "fas fa-list-ul"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldRef("contract_id", "договор", "contract", [][]int{{1, 2}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldDate("date", "дата", [][]int{{1, 3}}, "col-2"),
			t.GetFldInt("number", "номер", [][]int{{2, 1}}),
			t.GetFldString("description", "описание", 0, [][]int{{2, 1}}, "col-6"),
			t.GetFldFiles("draft", "черновик", [][]int{{3, 1}}, t.FldVueFilesParams{}),
			t.GetFldFiles("signed", "подписанный", [][]int{{3, 2}}, t.FldVueFilesParams{}),
			t.GetFldSelectString("state", "статус", 30, [][]int{{4, 1}}, []t.FldVueOptionsItem{
				{Label: "подготовка", Value: "preparation"},
				{Label: "согласование", Value: "approval"},
				{Label: "подписан", Value: "signed"},
			}, "col-2"),
			t.GetFldInt("amount", "сумма", [][]int{{5, 1}}),
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

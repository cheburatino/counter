package bug

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "bug"
	name_ru         = "баг"
	name_ru_plural  = "баги"
	menu_icon       = "image/bug.png"
	breadcrumb_icon = "fas fa-exclamation-triangle"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle().SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldRef("state_id", "статус", "ctlg_bug_state", [][]int{{1, 2}}).SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldString("description", "описание", 0, [][]int{{2, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`) && item.state_id != 1"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{3, 1}}, "col-4", "comp-relation"),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{4, 1}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldRef("system_id", "система", "system", [][]int{{4, 2}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{5, 1}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldRef("functional_requirement_id", "функциональное требование", "functional_requirement", [][]int{{5, 2}}, "isShowLink", "isClearable").SetReadonly("currentUser.role?.includes(`customer`)"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{6, 1}}, "col-4", "comp-participant"),
			t.GetFldSimpleHtml([][]int{{7, 1}}, "", "<p>Добавить контрол Специалисты</p>"),
			t.GetFldJsonbCompositionWithoutFld([][]int{{7, 2}}, "", "comp-customerAgent", ":currentUser='currentUser'"),
			t.GetFldString("result", "результат", 0, [][]int{{8, 1}}, "col-8").SetReadonly("currentUser.role?.includes(`customer`)"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates:   map[string]*t.DocTemplate{
			"sql_function_list.sql": {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
		},
	}

	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)

	doc.AddVueComposition("docItem", "customerAgent")
	doc.AddVueComposition("docItem", "participant")
	doc.AddVueComposition("docItem", "relation")

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	return doc
}

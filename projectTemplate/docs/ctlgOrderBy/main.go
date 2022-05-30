package ctlgOrderBy

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "ctlg_order_by"
	name_ru         = "сортировка"
	name_ru_plural  = "сортировки"
	menu_icon       = "image/catalog.svg"
	breadcrumb_icon = "fas fa-list-ul"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle().SetIsNotUniq(),
			t.GetFldRef("user_table_id", "пользователь", "user", [][]int{{1, 2}}, "col-2"),
			t.GetFldSelectString("index", "список", 20, [][]int{{1, 3}}, []t.FldVueOptionsItem{
				{Value: "system", Label: "системы"},
				{Value: "task", Label: "задачи"},
				{Value: "development_task", Label: "задачи разработки"},
				{Value: "technical_task", Label: "технические задания"},
				{Value: "contract", Label: "договоры"},
				{Value: "invoice", Label: "счета"},
				{Value: "payment", Label: "платежи"},
				{Value: "meeting", Label: "встречи"},
			}, "col-2").SetIsSearch(),
			t.GetFldCheckbox("is_default", "по умолчанию", [][]int{{1, 3}}, "col-2").SetDefault("false"),
			t.GetFldString("order_by_str", "условия сортировки", 0, [][]int{{2, 1}}, "col-8"),
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
			Hooks: t.DocSqlHooks{AfterTriggerAfter: []string{`
		if new.is_default != old.is_default and new.is_default = true
    	then
        	update ctlg_order_by set is_default = false where index = new.index and id != new.id;
   		end if;
`}},
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

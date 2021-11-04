package digitalSolutionSpecialistLink

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "digital_solution_specialist_link"
	name_ru         = "связь цифрового решения и специалиста"
	name_ru_plural  = "связи цифровых решений и специалиста"
	menu_icon       = "image/catalog.svg"
	breadcrumb_icon = "fas fa-list-ul"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldRef("digital_solution_id", "id цифрового решения", "digital_solution", [][]int{{2, 1}}),
			t.GetFldRef("specialist_id", "специалист", "man", [][]int{{2, 2}}),
			t.GetFldRef("role_id", "роль", "ctlg_digital_solution_specialist_role", [][]int{{3, 1}}),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8"),
			t.GetFldRef("author_id", "автор", "man", [][]int{{5, 1}}),
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
			IsUniqLink: true,
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

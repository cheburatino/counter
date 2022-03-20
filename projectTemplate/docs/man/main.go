package man

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "man"
	name_ru         = "контакт"
	name_ru_plural  = "контакты"
	menu_icon       = "image/man.svg"
	breadcrumb_icon = "fas fa-male"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			//t.GetFldTitleComputed("ltrim(rtrim(format('%s %s %s', new.last_name, new.first_name, new.middle_name)))").SetIsHide(),
			t.GetFldTitle(),
			t.GetFldString("last_name", "фамилия", 30, [][]int{{2, 1}}, "col-2"),
			t.GetFldString("first_name", "имя", 30, [][]int{{2, 2}}, "col-2"),
			t.GetFldString("middle_name", "отчество", 30, [][]int{{2, 3}}, "col-2"),
			t.GetFldRef("user_table_id", "пользователь", "user", [][]int{{2, 4}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("company_id", "компания", "company", [][]int{{3, 1}}, "isShowLink", "isClearable"),
			t.GetFldString("position", "должность", 50, [][]int{{3, 2}}),
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
			Hooks: t.DocSqlHooks{
				ListAfterBuildWhere: []string{`
	-- показ только специалистов Электрона
    if (params->>'company_id')::int notnull
    then
        whereStr = format('%s and company_id = %s', whereStr, (params->>'company_id')::int);
    end if;
				`},
			},
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

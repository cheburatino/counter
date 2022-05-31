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
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldDate("date", "дата", [][]int{{1, 2}}, "col-2"),
			t.GetFldRef("state_id", "статус", "ctlg_contract_state", [][]int{{1, 3}}, "col-2", "isClearable").SetDefault("1"),
			t.GetFldRef("company_id", "компания", "company", [][]int{{2, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("counterparty_id", "контрагент", "legal_entity", [][]int{{2, 2}}, "isShowLink", "isClearable"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("document", "документ", [][]int{{4, 1}}, t.FldVueFilesParams{}),
			// Технические задания {{4, 2}}
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates: map[string]*t.DocTemplate{
			"webClient_index.vue":   {},
			"sql_function_list.sql": {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Hooks: t.DocSqlHooks{BeforeTriggerBefore: []string{
				`
		-- заполняем компанию, с которой связан контрагент
		new.company_id = (select company_id from legal_entity where id = new.counterparty_id);
`,
			}},
		},
	}

	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "технические задания",      // название списка, которе выводится на экране
		FldName:    "technical_task_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "technical_task",           // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "contract_id",              // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/technical_task.svg", // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{4, 2}}, "col-4"))

	return doc
}

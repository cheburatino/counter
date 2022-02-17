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
			t.GetFldDate("date", "дата", [][]int{{1, 2}}, "col-2"),
			t.GetFldSelectString("state", "статус", 30, [][]int{{1, 3}}, []t.FldVueOptionsItem{
				{Label: "подготовка", Value: "preparation"},
				{Label: "согласование", Value: "approval"},
				{Label: "подписан", Value: "signed"},
				{Label: "получены оригиналы", Value: "original_received"},
			}, "col-2").SetDefault("'preparation'"),
			t.GetFldRef("counterparty_id", "контрагент", "counterparty", [][]int{{2, 1}}, "isShowLink", "isClearable"),
			t.GetFldString("description", "описание", 0, [][]int{{2, 2}}),
			t.GetFldFiles("draft", "черновик", [][]int{{3, 1}}, t.FldVueFilesParams{}),
			t.GetFldFiles("signed", "подписанный", [][]int{{3, 2}}, t.FldVueFilesParams{}),
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

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "технические задания",              // название списка, которе выводится на экране
		FldName:    "technical_task_list",           // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "technical_task",                // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "contract_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/technical_task.svg",      // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{4, 1}}, "col-4"))

	return doc
}

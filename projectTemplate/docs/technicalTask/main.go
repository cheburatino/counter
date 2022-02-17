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
			t.GetFldTitle("col-3"),
			t.GetFldInt("number", "номер", [][]int{{1, 2}}, "col-1"),
			t.GetFldInt("amount", "сумма", [][]int{{1, 3}}, "col-2"),
			t.GetFldRef("state_id", "статус", "ctlg_technical_task_state", [][]int{{1, 4}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("contract_id", "договор", "contract", [][]int{{2, 1}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldDate("date", "дата", [][]int{{2, 2}}, "col-2"),
			t.GetFldString("description", "описание", 0, [][]int{{2, 3}}),
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
		Label:      "счета",           // название списка, которе выводится на экране
		FldName:    "invoice_list",           // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "invoice",                // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "technical_task_id", 					 // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/invoice.svg",      // иконка, которая выводится в списке
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

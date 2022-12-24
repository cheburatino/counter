package system

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "system"
	name_ru         = "система"
	name_ru_plural  = "системы"
	menu_icon       = "image/system.png"
	breadcrumb_icon = "fas fa-project-diagram"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldRef("customer_id", "заказчик", "company", [][]int{{1, 2}}, "col-4", "isShowLink", "isClearable"),
			t.GetFldRef("state_id", "статус", "ctlg_system_state", [][]int{{2, 1}}, "col-4"),
			t.GetFldString("token", "токен", 30, [][]int{{2, 2}}, "col-4"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("files", "файлы", [][]int{{4, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("images", "изображения", [][]int{{4, 2}}, t.FldVueImgParams{}),
			// Цифровые решения {{5, 1}}
			// Задачи разработки {{5, 2}}
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates: map[string]*t.DocTemplate{
			"webClient_index.vue":          {},
			"sql_function_list.sql":        {},
			"sql_function_token_check.sql": {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"system_token_check": {Name: "system_token_check"},
			},
		},
	}

	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)

	doc.Vue.AddFixedSaveBtn()

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
					<q-item-label caption><q-badge color="positive">{{item.options.title.customer_title}}</q-badge> <q-badge color="orange">{{item.options.title.state_title}}</q-badge></q-item-label>
				 </q-item-section>
			`
		},
	}

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи",         // название списка, которе выводится на экране
		FldName:    "task_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",           // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "system_id",      // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/task.svg", // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{5, 1}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи заказчика",        // название списка, которе выводится на экране
		FldName:    "customer_task_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "customer_task",           // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "system_id",               // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/customer_task.png", // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{5, 2}}, "col-4"))

	return doc
}

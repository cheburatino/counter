package time

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "time"
	name_ru         = "время"
	name_ru_plural  = "время"
	menu_icon       = "image/time.svg"
	breadcrumb_icon = "fas fa-building"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitleComputed("format('%s, %s - %s', to_char(new.start_time, 'dd.mm.yyyy'), stateTitle, to_char(new.start_time, 'HH24:MI'), to_char(new.end_time, 'HH24:MI'))"),
			t.GetFldRef("state_id", "статус", "ctlg_time_state", [][]int{{1, 2}}, "col-2"),
			t.GetFldInt("effort", "затрачено", [][]int{{1, 3}}, "col-1"),
			t.GetFldDateTime("start_time", "начало", [][]int{{2, 1}}, "col-2").SetDefault("now()"),
			t.GetFldDateTime("end_time", "завершение", [][]int{{2, 2}}, "col-2"),
			t.GetFldInt("effort_for_customer_task", "время для задач разработки", [][]int{{2, 3}}, "col-2"),
			t.GetFldInt("effort_for_task", "время для задач", [][]int{{2, 4}}, "col-2"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
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
		Label:      "работы",           // название списка, которе выводится на экране
		FldName:    "work_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "work",           // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "time_id",                  // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/work.png", // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption>
					<q-badge color="orange">{{v.options.title.state_title}}</q-badge> <q-badge v-if="v.state_id === 3" color="positive">{{v.worked_time}} минут</q-badge>
				</q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{4, 1}}, "col-4"))

	return doc
}

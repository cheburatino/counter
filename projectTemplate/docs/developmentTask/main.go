package developmentTask

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "development_task"
	name_ru         = "задача разработки"
	name_ru_plural  = "задачи разработки"
	menu_icon       = "image/development_task.png"
	breadcrumb_icon = "fas fa-list-ul"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle().SetIsNotUniq(),
			t.GetFldRef("type_id", "тип", "ctlg_development_task_type", [][]int{{1, 2}}, "col-2"),
			t.GetFldRef("state_id", "статус", "ctlg_development_task_state", [][]int{{1, 3}}, "col-2"),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 1}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("technical_task_id", "техническое задание", "technical_task", [][]int{{2, 2}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{2, 3}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("responsible_id", "ответственный", "man", [][]int{{2, 4}}, "col-2", "isShowLink", "isClearable", `ext: {"company_id": 1}`),
			t.GetFldRef("sprint_id", "спринт", "sprint", [][]int{{3, 1}}, "col-2", "isShowLink", "isClearable").SetReadonly("item.state_id == 1"),
			t.GetFldInt("estimate", "оценка", [][]int{{3, 2}}, "col-1"),
			t.GetFldInt("internal_priority", "приоритет", [][]int{{3, 3}}, "col-1"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{3, 4}}, "col-2"),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{3, 5}}, "col-2"),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8"),
			t.GetFldFiles("description_files", "файлы описания", [][]int{{5, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("description_images", "изображения описания", [][]int{{5, 2}}, t.FldVueImgParams{}),
			// Задачи {{6, 1}}
			t.GetFldString("result", "результат", 0, [][]int{{7, 1}}, "col-8"),
			t.GetFldFiles("result_files", "файлы результата", [][]int{{8, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результата", [][]int{{8, 2}}, t.FldVueImgParams{}),
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
					<q-item-label caption>
						<q-item-label caption><q-badge v-if="item.internal_priority" color="blue-grey-3">{{item.internal_priority}}</q-badge> <q-badge color="orange">{{item.options.title.state_title}}</q-badge> <q-badge v-if="item.system_id" color="primary">{{item.options.title.system_title}}</q-badge> <q-badge v-if="item.sprint_id" color="info">{{item.options.title.sprint_title}} спринт</q-badge></q-item-label>
						<q-item-label caption>Плановая дата завершения: {{$utils.formatPgDate(item.plan_end_date)}}</q-item-label>
						<q-item-label caption v-if="item.fact_end_date">Фактическая дата завершения: {{$utils.formatPgDate(item.fact_end_date)}}</q-item-label>
					</q-item-label>
				 </q-item-section>
			`
		},
	}

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи",              // название списка, которе выводится на экране
		FldName:    "task_list",           // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",                // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "development_task_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/task.svg",      // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
			t.GetFldRef("type_id", "тип задачи", "ctlg_task_type", [][]int{{2, 2}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge> <q-badge color="info">{{v.options.title.type_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{6, 1}}, "col-4"))

	return doc
}

package task

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "task"
	name_ru         = "задача"
	name_ru_plural  = "задачи"
	menu_icon       = "image/task.svg"
	breadcrumb_icon = "fas fa-clipboard-check"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle().SetIsNotUniq(),
			t.GetFldRef("type_id", "тип задачи", "ctlg_task_type", [][]int{{1, 2}}, "col-2"),
			t.GetFldRef("stage_id", "этап", "ctlg_task_stage", [][]int{{1, 3}}, "col-1").SetDefault("1").SetIsRequired(),
			t.GetFldRef("state_id", "статус", "ctlg_task_state", [][]int{{1, 4}}, "col-1").SetDefault("1").SetIsRequired(),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 1}}, "isShowLink", "isClearable").SetIsRequired(),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{3, 1}}, "col-2"),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{3, 2}}, "col-2"),
			t.GetFldInt("customer_priority", "приоритет заказчика", [][]int{{3, 3}}, "col-1"),
			t.GetFldInt("estimate", "оценка", [][]int{{3, 4}}, "col-1"),
			t.GetFldInt("worked_time", "затрачено", [][]int{{3, 5}}, "col-1").SetReadonly("true"),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8"),
			t.GetFldFiles("description_files", "файлы", [][]int{{5, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("description_images", "изображения", [][]int{{5, 2}}, t.FldVueImgParams{}),
			t.GetFldString("how_to_check", "как проверить задачу", 0, [][]int{{6, 1}}),
			t.GetFldFiles("how_to_check_files", "файлы", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("how_to_check_images", "изображения", [][]int{{7, 2}}, t.FldVueImgParams{}),
			// Работы {{8, 1}}
			// Задачи заказчика {{8, 2}}
			t.GetFldString("result", "результат", 0, [][]int{{9, 1}}, "col-8"),
			t.GetFldFiles("result_files", "файлы результата", [][]int{{10, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результата", [][]int{{10, 2}}, t.FldVueImgParams{}),
			t.GetFldJsonbComposition("history", "история", [][]int{{11, 2}}, "col-4", "history"),
			t.GetFldRef("executor_responsible_id", "ответственный исполнитель", "contact", [][]int{{12, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("customer_responsible_id", "ответственный заказчик", "contact", [][]int{{12, 2}}, "isShowLink", "isClearable"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates: map[string]*t.DocTemplate{
			"sql_function_create.sql":                     {},
			"sql_function_to_backlog.sql":                 {},
			"sql_function_to_in_process.sql":              {},
			"sql_function_to_internal_check.sql":          {},
			"sql_function_to_customer_check.sql":          {},
			"sql_function_to_done.sql":                    {},
			"sql_function_update.sql":                     {},
			"sql_function_save_history.sql":               {},
			"sql_function_change_plan_end_date.sql":       {},
			"webClient_item.vue":                          {Source: "docs/task/tmpl/webClient_item.vue"},
			"webClient_index.vue":                         {Source: "docs/task/tmpl/webClient_index.vue"},
			"webClient_filterComponent.vue":               {Source: "docs/task/tmpl/webClient_filterComponent.vue", DistPath: "../src/webClient/src/app/components/task/comp", DistFilename: "filterComponent.vue"},
			"webClient_planEndDateChangeDialogButton.vue": {Source: "docs/task/tmpl/webClient_planEndDateChangeDialogButton.vue", DistPath: "../src/webClient/src/app/components/task/comp", DistFilename: "planEndDateChangeDialogButton.vue"},
			"webClient_timelineDialogButton.vue":          {Source: "docs/task/tmpl/webClient_timelineDialogButton.vue", DistPath: "../src/webClient/src/app/components/task/comp", DistFilename: "timelineDialogButton.vue"},
			"webClient_taskDeleteButton.vue":              {Source: "docs/task/tmpl/webClient_taskDeleteButton.vue", DistPath: "../src/webClient/src/app/components/task/comp", DistFilename: "taskDeleteButton.vue"},
			"webClient_taskAddButton.vue":                 {Source: "docs/task/tmpl/webClient_taskAddButton.vue", DistPath: "../src/webClient/src/app/components/task/comp", DistFilename: "taskAddButton.vue"},
			"webClient_setNextStageButton.vue":            {Source: "docs/task/tmpl/webClient_setNextStageButton.vue", DistPath: "../src/webClient/src/app/components/task/comp", DistFilename: "setNextStageButton.vue"},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"task_create":               {Name: "task_create"},
				"task_to_backlog":           {Name: "task_to_backlog"},
				"task_to_in_process":        {Name: "task_to_in_process"},
				"task_to_internal_check":    {Name: "task_to_internal_check"},
				"task_to_customer_check":    {Name: "task_to_customer_check"},
				"task_to_done":              {Name: "task_to_done"},
				"task_save_history":         {Name: "task_save_history"},
				"task_change_plan_end_date": {Name: "task_change_plan_end_date"},
			},
			Hooks: t.DocSqlHooks{
				BeforeTriggerBefore: []string{`
		if new.stage_id = 6 and new.fact_end_date isnull then raise exception 'невозможно завершить задачу без фактической даты завершения'; end if;
		if new.stage_id = 6 and coalesce(new.worked_time, 0) = 0 then raise exception 'невозможно завершить задачу без затраченного времени'; end if;
				`},
				AfterTriggerAfter: []string{`
		if coalesce(new.system_id, 0) != coalesce(old.system_id, 0)
		then
			update work set system_id = new.system_id where task_id = new.id;
		end if;
				`},
				ListAfterBuildWhere: []string{`
		-- добавляем в фильтр условия из where на клиенте
		if params->>'where_param' notnull
		then
			whereStr = format('%s and (%s)', whereStr, params->>'where_param');
		end if;
`},
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
					<q-item-label caption>
						<q-item-label caption><q-badge class="q-ma-sm" color="orange">{{item.options.title.state_title}}</q-badge><q-badge class="q-ma-sm" color="primary">{{item.options.title.system_title}}</q-badge><q-badge class="q-ma-sm" color="light-blue-3">{{item.options.title.executor_title}}</q-badge><q-badge class="q-ma-sm" color="info">{{item.plan_end_date}}</q-badge></q-item-label>
					</q-item-label>
				 </q-item-section>
			`
		},
	}

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "работы",         // название списка, которе выводится на экране
		FldName:    "work_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "work",           // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "task_id",        // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/work.png", // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{8, 1}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи заказчика",        // название списка, которе выводится на экране
		FldName:    "customer_task_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "customer_task",           // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "task_id",                 // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/customer_task.png", // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{8, 2}}, "col-4"))

	return doc
}

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
			t.GetFldRef("state_id", "статус", "ctlg_task_state", [][]int{{1, 3}}, "col-2").SetDefault("1"),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 1}},  "isShowLink", "isClearable"),
			t.GetFldRef("work_time_sheet_id", "лурв", "work_time_sheet", [][]int{{2, 2}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("technical_task_id", "тз", "technical_task", [][]int{{2, 3}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{3, 1}}, "col-2"),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{3, 2}}, "col-2"),
			t.GetFldInt("specialist_priority", "приоритет", [][]int{{3, 3}}, "col-1"),
			t.GetFldInt("estimate", "оценка", [][]int{{3, 4}}, "col-1"),
			t.GetFldInt("worked_time", "затрачено", [][]int{{3, 5}}, "col-1").SetReadonly("true"),
			t.GetFldCheckbox("today", "в работе сегодня", [][]int{{3, 6}}, "col-1").SetDefault("false"),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8"),
			t.GetFldFiles("files", "файлы", [][]int{{5, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("images", "изображения", [][]int{{5, 2}}, t.FldVueImgParams{}),
			t.GetFldString("process", "процесс", 0, [][]int{{6, 1}}, "col-8"),
			t.GetFldFiles("process_files", "файлы процесса", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("process_images", "изображения процесса", [][]int{{7, 2}}, t.FldVueImgParams{}),
			// Работы {{8, 1}}
			// Задачи заказчика {{8, 2}}
			t.GetFldString("result", "результат", 0, [][]int{{9, 1}}, "col-8"),
			t.GetFldFiles("result_files", "файлы результата", [][]int{{10, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результата", [][]int{{10, 2}}, t.FldVueImgParams{}),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates: map[string]*t.DocTemplate{
			"sql_function_list.sql": {},
			"webClient_index.vue":   {},
		},
		IsBaseTemplates: t.DocIsBaseTemplates{true, true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"task_get_specialist":      {Name: "task_get_specialist"},
				"task_get_specialist_role": {Name: "task_get_specialist_role"},
			},
			Hooks: t.DocSqlHooks{
				BeforeTriggerBefore: []string{`
		if new.state_id = 5 and new.fact_end_date isnull then raise exception 'невозможно завершить задачу без фактической даты завершения'; end if;
		if new.state_id = 5 and coalesce(new.worked_time, 0) = 0 then raise exception 'невозможно завершить задачу без затраченного времени'; end if;
				`},
				AfterTriggerAfter: []string{`
		if coalesce(new.system_id, '') != coalesce(old.system_id, '')
		then
			update work set system_id = new.system_id where task_id = new.id;
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
		Label:      "работы",            // название списка, которе выводится на экране
		FldName:    "work_list",           // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "work",                // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "task_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/work.png",      // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{8, 1}}, "col-4"))

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "задачи заказчика",            // название списка, которе выводится на экране
		FldName:    "customer_task_list",           // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "customer_task",                // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "task_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/customer_task.png",      // иконка, которая выводится в списке
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

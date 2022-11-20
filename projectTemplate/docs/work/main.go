package work

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "work"
	name_ru         = "работа"
	name_ru_plural  = "работы"
	menu_icon       = "image/work.png"
	breadcrumb_icon = "fas fa-laptop-code"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle("col-2").SetIsNotUniq(),
			t.GetFldInt("estimate", "оценка", [][]int{{1, 2}}, "col-1"),
			t.GetFldInt("worked_time", "затрачено", [][]int{{1, 3}}, "col-1").SetReadonly("true"),
			t.GetFldCheckbox("today", "в работе сегодня", [][]int{{1, 4}}, "col-1").SetDefault("false"),
			t.GetFldInt("specialist_priority", "приоритет", [][]int{{1, 5}}, "col-1"),
			t.GetFldRef("state_id", "статус", "ctlg_work_state", [][]int{{1, 6}}, "col-2").SetDefault("1"),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 1}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("executor_id", "исполнитель", "man", [][]int{{2, 2}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("task_id", "задача", "task", [][]int{{2, 3}}, "isShowLink", "isClearable"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{3, 1}}),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{3, 2}}),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8"),
			t.GetFldFiles("description_files", "файлы описания", [][]int{{5, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("description_images", "изображения описания", [][]int{{5, 2}}, t.FldVueImgParams{}),
			t.GetFldString("process", "процесс", 0, [][]int{{6, 1}}, "col-8"),
			t.GetFldFiles("process_files", "файлы результата", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("process_images", "изображения результата", [][]int{{7, 2}}, t.FldVueImgParams{}),
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
			Hooks: t.DocSqlHooks{
				BeforeTriggerBefore: []string{`
		if new.task_id notnull
        then
            new.system_id = (select system_id from task where id = new.task_id);
        end if;

		if new.state_id = 3 and coalesce(new.worked_time, 0) = 0 then raise exception 'невозможно завершить работу без затраченного времени'; end if;
				`},
				AfterTriggerAfter: []string{`
		-- хук из main.go
		if coalesce(new.worked_time, 0) != coalesce(old.worked_time, 0)
		then
            update task set worked_time = (select coalesce(sum(worked_time), 0) from work where task_id = new.task_id) where id = new.task_id;
        end if;
        --/ хук из main.go
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

	doc.AddFld(t.GetFldVueCompositionRefList(&doc, t.VueCompRefListWidgetParams{
		Label:      "время",          // название списка, которе выводится на экране
		FldName:    "time_list",      // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "time",           // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "work_id",        // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/time.svg", // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption>
					<q-badge color="orange">{{v.options.title.state_title}}</q-badge>
				</q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{8, 1}}, "col-4"))

	doc.Vue.AddFixedSaveBtn()

	return doc
}

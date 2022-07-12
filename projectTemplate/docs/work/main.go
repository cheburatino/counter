package work

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "work"
	name_ru         = "дело"
	name_ru_plural  = "дела"
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
			t.GetFldTitle(),
			t.GetFldRef("state_id", "статус", "ctlg_work_state", [][]int{{1, 2}}),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 1}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{2, 2}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("task_id", "задача", "task", [][]int{{2, 3}}, "isShowLink", "isClearable"),
			t.GetFldDate("plan_end_date", "плановая дата завершения", [][]int{{3, 1}}, "col-2"),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{3, 2}}, "col-2"),
			t.GetFldInt("estimate", "оценка", [][]int{{3, 3}}, "col-1"),
			t.GetFldInt("worked_time", "затрачено", [][]int{{3, 4}}, "col-1"),
			t.GetFldInt("specialist_priority", "приоритет", [][]int{{3, 5}}, "col-1"),
			t.GetFldCheckbox("today", "в работе сегодня", [][]int{{3, 6}}, "col-1").SetDefault("false"),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8"),
			t.GetFldFiles("files", "файлы", [][]int{{5, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("images", "изображения", [][]int{{5, 2}}, t.FldVueImgParams{}),
			t.GetFldString("process", "процесс", 0, [][]int{{6, 1}}, "col-8"),
			t.GetFldFiles("process_files", "файлы результата", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("process_images", "изображения результата", [][]int{{7, 2}}, t.FldVueImgParams{}),
			t.GetFldString("result", "результат", 0, [][]int{{8, 1}}, "col-8"),
			t.GetFldFiles("result_files", "файлы результата", [][]int{{9, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результата", [][]int{{9, 2}}, t.FldVueImgParams{}),
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
		},
	}

	// создаем стандартные методы sql "list", "update", "get_by_id" с возможностью ограничения по ролям
	doc.Sql.FillBaseMethods(doc.Name)

	doc.Vue.I18n = map[string]string{
		"listTitle":        utils.UpperCaseFirst(name_ru_plural),
		"listDeletedTitle": "Удаленные " + name_ru_plural,
	}

	doc.Init()

	doc.Vue.AddFixedSaveBtn()

	return doc
}

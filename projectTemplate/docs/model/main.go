package model

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "model"
	name_ru         = "модель"
	name_ru_plural  = "модели"
	menu_icon       = "image/model.svg"
	breadcrumb_icon = "fas fa-list-ul"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldRef("type_id", "тип", "ctlg_model_type", [][]int{{1 ,2}}, "col-2"),
			t.GetFldRef("state_id", "статус", "ctlg_model_state", [][]int{{1, 3}}, "col-2").SetDefault("1"),
			t.GetFldRef("system_id", "система", "system", [][]int{{2, 1}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldRef("digital_solution_id", "цифровое решение", "digital_solution", [][]int{{2, 2}}, "col-2", "isShowLink", "isClearable"),
			t.GetFldDate("plan_end_date", "планируемая дата завершения", [][]int{{2, 3}}, "col-2"),
			t.GetFldDate("fact_end_date", "фактическая дата завершения", [][]int{{2, 4}}, "col-2"),
			t.GetFldString("description", "описание", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("description_files", "файлы описания", [][]int{{4, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("description_images", "изображения описания", [][]int{{4, 2}}, t.FldVueImgParams{}),
			// Задачи {{5, 1}}
			t.GetFldString("result", "результат", 0, [][]int{{6, 1}}, "col-8"),
			t.GetFldFiles("result_files", "файлы результата", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результата", [][]int{{7, 2}}, t.FldVueImgParams{}),
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
		Label:      "задачи",              // название списка, которе выводится на экране
		FldName:    "task_list",           // название поля. Любое, в формате snake_case. На основе этого названия формируется название компоненты во vue.
		TableName:  "task",                // название связанной таблицы, из которой будут выгружаться записи
		RefFldName: "bug_id", // название поля в связанной таблицы, по которому осуществляется связь
		Avatar:     "image/task.svg",      // иконка, которая выводится в списке
		NewFlds: []t.FldType{
			t.GetFldString("title", "название", 300, [][]int{{1, 1}}).SetIsRequired(),
		}, // список полей, которые заполняются при добавлении новой записи
		TitleTemplate: `
                <q-item-label>{{v.title}}</q-item-label>
                <q-item-label caption><q-badge color="orange">{{v.options.title.state_title}}</q-badge></q-item-label>
            `, // шаблон для названия в списке (vue синтаксис)
	}, [][]int{{5, 1}}, "col-4"))

	return doc
}

package meeting

import (
	t "github.com/pepelazz/nla_framework/types"
	"github.com/pepelazz/nla_framework/utils"
)

const (
	name            = "meeting"
	name_ru         = "встреча"
	name_ru_plural  = "встречи"
	menu_icon       = "image/meeting.svg"
	breadcrumb_icon = "fas fa-users"
)

func GetDoc(project *t.ProjectType) t.DocType {
	doc := t.DocType{
		Project: project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitle(),
			t.GetFldDateTime("datetime", "дата и время", [][]int{{1, 2}}, "col-2"),
			t.GetFldRef("state_id", "статус", "ctlg_meeting_state", [][]int{{1, 3}}, "col-2"),
			t.GetFldString("description", "описание и темы", 0, [][]int{{2, 1}}, "col-8"),
			t.GetFldFiles("description_files", "файлы описания", [][]int{{3, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("description_images", "изображения описания", [][]int{{3, 2}}, t.FldVueImgParams{}),
			t.GetFldString("notes", "заметки", 0, [][]int{{4, 1}}, "col-8"),
			t.GetFldFiles("notes_files", "файлы заметок", [][]int{{5, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("notes_images", "изображения заметок", [][]int{{5, 2}}, t.FldVueImgParams{}),
			t.GetFldString("result", "результаты", 0, [][]int{{6, 1}}, "col-8"),
			t.GetFldFiles("result_files", "файлы результатов", [][]int{{7, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результатов", [][]int{{7, 2}}, t.FldVueImgParams{}),
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

	return doc
}

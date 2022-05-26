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
			t.GetFldRef("state_id", "статус", "ctlg_meeting_state", [][]int{{1, 3}}, "col-2").SetDefault("1"),
			t.GetFldString("place", "место", 0, [][]int{{2, 1}}, "col-8"),
			t.GetFldString("description", "описание и темы", 0, [][]int{{3, 1}}, "col-8"),
			t.GetFldFiles("description_files", "файлы описания", [][]int{{4, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("description_images", "изображения описания", [][]int{{4, 2}}, t.FldVueImgParams{}),
			t.GetFldString("notes", "заметки", 0, [][]int{{5, 1}}, "col-8"),
			t.GetFldFiles("notes_files", "файлы заметок", [][]int{{6, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("notes_images", "изображения заметок", [][]int{{6, 2}}, t.FldVueImgParams{}),
			t.GetFldString("result", "результаты", 0, [][]int{{7, 1}}, "col-8"),
			t.GetFldFiles("result_files", "файлы результатов", [][]int{{8, 1}}, t.FldVueFilesParams{}),
			t.GetFldImgList("result_images", "изображения результатов", [][]int{{8, 2}}, t.FldVueImgParams{}),
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

	doc.Vue.TmplFuncs = map[string]func(t.DocType) string{
		// шаблон названия в списке
		"PrintListRowLabel": func(docType t.DocType) string {
			return `
				 <q-item-section>
				    <q-item-label lines="1">{{item.title}}</q-item-label>
					<q-item-label caption><q-badge color="orange">{{item.options.title.state_title}}</q-badge> {{$utils.formatPgDate(item.datetime)}}</q-item-label>
				 </q-item-section>
			`
		},
	}

	return doc
}

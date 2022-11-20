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
			t.GetFldTitleComputed("format('Статус: %s Начало: %s Завершение: %s Полезная нагрузка: %s', stateTitle, to_char(new.start_time, 'dd.mm - hh24:mi'), coalesce(to_char(new.end_time, 'dd.mm - hh24:mi'), 'не завершено'), new.effort)"),
			t.GetFldInt("effort", "полезная нагрузка", [][]int{{1, 2}}, "col-2").SetDefault("0"),
			t.GetFldRef("state_id", "статус", "ctlg_time_state", [][]int{{1, 3}}, "col-2").SetDefault("1"),
			t.GetFldDateTime("start_time", "начало", [][]int{{2, 1}}, "col-2"),
			t.GetFldDateTime("end_time", "завершение", [][]int{{2, 2}}, "col-2"),
			t.GetFldRef("executor_id", "исполнитель", "man", [][]int{{2, 3}}, "isShowLink", "isClearable"),
			t.GetFldRef("work_id", "работа", "work", [][]int{{3, 1}}, "isShowLink", "isClearable"),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8"),
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
			Hooks: t.DocSqlHooks{
				AfterTriggerAfter: []string{`
		-- хук из main.go
		if new.start_time isnull then new.start_time = now(); end if;

        if new.effort != old.effort or new.state_id != old.state_id
        then
            update work set worked_time = (select sum(effort) from time where work_id = new.work_id and state_id = 2) where id = new.work_id;
        end if;
        -- /хук из main.go
				`},
				BeforeTriggerBefore: []string{`
		-- хук из main.go
		if new.end_time < new.start_time then raise exception 'дата завершения не может быть меньше даты начала'; end if;
		if new.state_id = 2 and new.end_time isnull then raise exception 'невозможно завершить время если не указана дата завершения'; end if;
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

	return doc
}

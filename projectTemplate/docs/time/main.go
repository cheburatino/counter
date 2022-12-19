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
		Project:    project,
		Name:       name,
		NameRu:     name_ru,
		PathPrefix: "docs",
		Flds: []t.FldType{
			t.GetFldTitleComputed("format('id: %s, время: %s', new.id, new.effort)", "col-8"),
			//t.GetFldTitleComputed("format('Статус: %s Начало: %s Завершение: %s Полезная нагрузка: %s', stateTitle, to_char(new.start_time, 'dd.mm - hh24:mi'), coalesce(to_char(new.end_time, 'dd.mm - hh24:mi'), 'не завершено'), new.effort)", "col-8"),
			t.GetFldInt("effort", "полезная нагрузка", [][]int{{1, 2}}, "col-2").SetDefault("0"),
			t.GetFldRef("state_id", "статус", "ctlg_time_state", [][]int{{1, 3}}, "col-2").SetDefault("1").SetIsRequired().SetIsSearch(),
			t.GetFldDateTime("start_time", "начало", [][]int{{2, 1}}, "col-2"),
			t.GetFldDateTime("end_time", "завершение", [][]int{{2, 2}}, "col-2"),
			t.GetFldDateTime("counter_start_time", "старт счётчика", [][]int{{4, 2}}, "col-2"),
			t.GetFldRef("system_id", "система", "system", [][]int{{3, 1}}, "isShowLink", "isClearable"),
			t.GetFldRef("work_id", "работа", "work", [][]int{{3, 2}}, "isShowLink", "isClearable").SetIsSearch(),
			t.GetFldString("description", "описание", 0, [][]int{{4, 1}}, "col-8"),
		},
		Vue: t.DocVue{
			RouteName:      name,
			MenuIcon:       menu_icon,
			BreadcrumbIcon: breadcrumb_icon,
			Roles:          []string{},
		},
		Templates: map[string]*t.DocTemplate{
			"sql_function_counter_continue.sql": {},
			"sql_function_counter_pause.sql":    {},
			"sql_function_counter_confirm.sql":  {},
			"sql_function_counter_create.sql":   {},
			"webClient_item.vue": {Source: "docs/time/tmpl/webClient_item.vue"},
			"webClient_TimeCounter.vue":         {Source: "docs/time/tmpl/webClient_TimeCounter.vue", DistPath: "../src/webClient/src/app/components/time/comp", DistFilename: "TimeCounter.vue"},

		},
		IsBaseTemplates: t.DocIsBaseTemplates{Vue: true, Sql: true},
		Sql: t.DocSql{
			IsSearchText:    true,
			IsBeforeTrigger: true,
			IsAfterTrigger:  true,
			Methods: map[string]*t.DocSqlMethod{
				"time_counter_continue": {Name: "time_counter_continue"},
				"time_counter_pause":    {Name: "time_counter_pause"},
				"time_counter_confirm":  {Name: "time_counter_confirm"},
				"time_counter_create":   {Name: "time_counter_create"},
			},
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
		if new.state_id != coalesce(old.state_id, 0) and new.state_id != 3 and ((select count(id) from time where id != new.id and work_id = new.work_id and state_id != 3 and deleted = false) > 0)
		then
			raise exception 'не должно быть двух времён в не завершённом статусе';
		end if;
		if new.system_id isnull then new.system_id = (select system_id from time where id = new.work_id); end if;
		if new.end_time < new.start_time then raise exception 'дата завершения не может быть меньше даты начала'; end if;
		if new.state_id = 3 and new.end_time isnull then raise exception 'невозможно завершить время если не указана дата завершения'; end if;
		if new.state_id = 3 and coalesce(new.effort, 0) = 0 then raise exception 'невозможно завершить время без полезной нагрузки'; end if;
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

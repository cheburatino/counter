package webServer

import (
	"encoding/json"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/cheburatino/electron_is/src/pg"
	"github.com/cheburatino/electron_is/src/types"
	"github.com/cheburatino/electron_is/src/utils"
	"github.com/tidwall/gjson"
	"net/http"
	"strings"
	"time"
)

type (
	PgMethod struct {
		Title      string
		Roles      []string
		Cache      PgMethodCache
		BeforeHook func(*gin.Context, interface{}) error
	}
	pgFuncCacheType struct {
		Data        []byte
		ExpiredTime time.Time
	}
	PgMethodCache interface {
		Duration() time.Duration                                        // время кэширования в секундах
		GetKey(userId, role string, params interface{}) (string, error) // формирование ключа
	}
)

var (
	pgFuncCache = map[string]pgFuncCacheType{}
	pgFuncList  = []PgMethod{
		PgMethod{"user_update", []string{"admin",}, nil, nil},
		PgMethod{"user_list", []string{}, nil, nil},
		PgMethod{"user_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"user_get_by_id_for_ui", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"current_user_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"current_user_get_auth_providers", []string{}, nil, BeforeHookAddUserId},
		
		PgMethod{"ctlg_request_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_request_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_request_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_model_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_model_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_model_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_model_type_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_model_type_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_model_type_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_request_priority_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_request_priority_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_request_priority_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_time_type_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_time_type_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_time_type_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_digital_solution_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_digital_solution_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_digital_solution_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_digital_solution_specialist_role_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_digital_solution_specialist_role_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_digital_solution_specialist_role_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_functional_requirement_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_functional_requirement_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_functional_requirement_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_functional_requirement_specialist_role_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_functional_requirement_specialist_role_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_functional_requirement_specialist_role_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_task_type_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_task_type_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_task_type_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_task_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_task_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_task_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_task_role_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_task_role_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_task_role_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_work_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_work_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_work_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_work_specialist_role_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_work_specialist_role_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_work_specialist_role_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_bug_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_bug_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_bug_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_contract_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_contract_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_contract_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_technical_task_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_technical_task_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_technical_task_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_technical_task_work_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_technical_task_work_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_technical_task_work_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_completion_act_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_completion_act_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_completion_act_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_invoice_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_invoice_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_invoice_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_filter_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_filter_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_filter_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_order_by_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_order_by_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_order_by_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_development_task_state_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_development_task_state_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_development_task_state_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_development_task_type_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_development_task_type_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"ctlg_development_task_type_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"meeting_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"meeting_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"meeting_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"contract_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"contract_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"contract_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"technical_task_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"technical_task_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"technical_task_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"counterparty_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"counterparty_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"counterparty_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"company_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"company_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"company_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"man_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"man_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"man_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"system_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"system_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"system_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"request_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"request_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"request_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"request_change_system_sequence", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"digital_solution_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"digital_solution_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"digital_solution_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"development_task_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"development_task_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"development_task_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"model_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"model_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"model_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"functional_requirement_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"functional_requirement_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"functional_requirement_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"invoice_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"invoice_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"invoice_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"payment_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"payment_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"payment_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"completion_act_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"completion_act_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"completion_act_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"sprint_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"sprint_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"sprint_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"task_get_specialist", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"task_get_specialist_role", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"task_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"task_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"task_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"work_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"work_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"work_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"customer_task_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"customer_task_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"customer_task_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"bug_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"bug_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"bug_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"task_specialist_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"task_specialist_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"task_specialist_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"system_customer_agent_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"system_customer_agent_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"system_customer_agent_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"request_customer_agent_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"request_customer_agent_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"request_customer_agent_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"functional_requirement_customer_agent_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"functional_requirement_customer_agent_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"functional_requirement_customer_agent_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"digital_solution_specialist_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"digital_solution_specialist_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"digital_solution_specialist_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"functional_requirement_specialist_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"functional_requirement_specialist_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"functional_requirement_specialist_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"digital_solution_customer_agent_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"digital_solution_customer_agent_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"digital_solution_customer_agent_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"bug_customer_agent_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"bug_customer_agent_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"bug_customer_agent_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"work_specialist_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"work_specialist_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"work_specialist_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"work_task_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"work_task_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"work_task_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"company_man_link_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"company_man_link_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"company_man_link_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"time_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"time_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"time_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"comment_list", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"comment_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"comment_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"news_from_dima_update", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"news_from_dima_get_by_id", []string{}, nil, BeforeHookAddUserId},
		PgMethod{"news_from_dima_list", []string{}, nil, BeforeHookAddUserId},
	}
)

func apiCallPgFunc(c *gin.Context) {

	var jsonParam JsonParamType
	if v, ok := c.Get(utils.ContextJsonParam); !ok {
		utils.HttpError(c, http.StatusMethodNotAllowed, "missed params")
		return
	} else {
		jsonParam = v.(JsonParamType)
	}
	if len(jsonParam.Method) == 0 {
		utils.HttpError(c, http.StatusMethodNotAllowed, "missed method name")
		return
	}

	// проверяем что метод из списка разрешенных для вызова через api
	isCorrectMethod := false
	isAllowedMethod := false
	// создаем переменную для хранении информации о кэше
	cacheResult := struct {
		Data           []byte
		NewExpiredTime time.Time
		Key            string
	}{}

	u, _ := c.Get(utils.GinContextUser)
	user := u.(*types.User)

	for _, v := range pgFuncList {
		if v.Title == jsonParam.Method {
			isCorrectMethod = true
			// если роли для данного метода не указаны, то метод автоматически разрешен
			if len(v.Roles) == 0 {
				isAllowedMethod = true
			}
			// проверяем роль
			for _, role := range v.Roles {
				for _, userRole := range user.Role {
					if userRole == role {
						isAllowedMethod = true
						break
					}
				}
			}
			// проверяем есть ли beforeHook
			if v.BeforeHook != nil {
				err := v.BeforeHook(c, jsonParam)
				if err != nil {
					utils.HttpError(c, http.StatusMethodNotAllowed, err.Error())
					return
				}
			}
			if v.Cache != nil {
				key, err := v.Cache.GetKey(user.IdString(), user.GetRoleAsString(), jsonParam.Params)
				if err == nil {
					// в случае ошибки не формируем ключ для кэширования. Детали об ошибки выводим внутри метода.
					// заполняем информацию, необходимую для кэширования
					cacheResult.Key = key
					cacheResult.NewExpiredTime = time.Now().Add(v.Cache.Duration() * time.Second)
					if res, ok := pgFuncCache[key]; ok {
						// проверяем не истекло ли время кэша
						if res.ExpiredTime.After(time.Now()) {
							cacheResult.Data = res.Data
						}
					}
				}
			}
			break
		}
	}
	// если метода нет в списке то выходим
	if !isCorrectMethod {
		utils.HttpError(c, http.StatusMethodNotAllowed, "not allowed method: "+jsonParam.Method)
		return
	}

	// если метода нет в списке то выходим
	if !isAllowedMethod {
		utils.HttpError(c, http.StatusMethodNotAllowed, "for this role not allowed method: "+jsonParam.Method)
		return
	}

	// запрос к postgres, если нет данных из кэша
	queryRes := []byte("")
	if len(cacheResult.Data) == 0 {
		var err error
		queryRes, err = callPgFuncToJson(jsonParam.Method, jsonParam.Params)
		if err != nil {
			utils.HttpError(c, http.StatusBadRequest, processPgErrorMsg(err))
			return
		}
		// в случае если указан ключ для кэширования, сохраняем полученные данные из базы в кэш
		if len(cacheResult.Key) > 0 {
			pgFuncCache[cacheResult.Key] = pgFuncCacheType{queryRes, cacheResult.NewExpiredTime}
		}
	} else {
		queryRes = cacheResult.Data
	}

	//// логгирование обращений к сайту
	//{
	//	u, _ := c.Get(common.GinContextUser)
	//	user := u.(*model.User)
	//	common.GraylogConfig.L().Infom(map[string]interface{}{"web_api_call": jsonParam.Method, "userId": user.Id, "username": user.Fullname}, fmt.Sprintf("%s. Is from cache: %v", jsonParam.Method, len(cacheResult.Data)))
	//
	//}

	// перекладываем ответ из jsonParam в jsonParam
	c.JSON(http.StatusOK, gin.H{
		"ok":        gjson.Get(fmt.Sprintf("%s", queryRes), "ok").Bool(),
		"result":    gjson.Get(fmt.Sprintf("%s", queryRes), "result").Value(),
		"message":   gjson.Get(fmt.Sprintf("%s", queryRes), "message").Value(),
		"meta_info": gjson.Get(fmt.Sprintf("%s", queryRes), "meta_info").Value(),
	})
}

func callPgFuncToJson(funcName string, jsonMap interface{}) (queryRes []byte, err error) {
	var queryStr string
	var jsonStr []byte

	// по разному обрабатываем параметры запроса в зависмости от типа: может быть строка, а может быть map
	switch v := jsonMap.(type) {
	case string:
		v = strings.Replace(v, "'", "''", -1)
		jsonStr = []byte(v)
	case map[string]interface{}:
		if jsonStr, err = json.Marshal(v); err != nil {
			return
		}
		jsonStr = []byte(strings.Replace(string(jsonStr), "'", "''", -1))
	default:
		jsonStr = []byte{}
	}

	if len(jsonStr) > 0 {
		queryStr = fmt.Sprintf("select * from %s('%s')", funcName, jsonStr)
	} else {
		queryStr = fmt.Sprintf("select * from %s()", funcName)
	}

	//println("!!! callPgFuncToJson queryStr:", queryStr)

	err = pg.Pg.QueryRow(queryStr).Scan(&queryRes)
	if err != nil {
		return
	}

	return
}

func BeforeHookAddUserId(c *gin.Context, p interface{}) error {
	jsonParam, ok := p.(JsonParamType)
	if !ok {
		return errors.New(fmt.Sprintf("BeforeHookAddUserId wrong type assertion %s not JsonParamType", p))
	}
	if jsonParam.Params == nil {
		return errors.New(fmt.Sprintf("missed params in method %s", jsonParam.Method))
	}
	if u, ok := c.Get(utils.GinContextUser); ok {
		user := u.(*types.User)
		m, ok := jsonParam.Params.(map[string]interface{})
		if !ok {
			return errors.New(fmt.Sprintf("BeforeHookAddUserId wrong type assertion %s not map[string]interface{}", jsonParam.Params))
		}
		m["user_id"] = user.Id
	}
	return nil
}

func processPgErrorMsg (err error) string  {

	return err.Error()
}
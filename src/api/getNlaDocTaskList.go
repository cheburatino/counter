package api

import (
	"github.com/cheburatino/counter/src/pg"
	"github.com/cheburatino/counter/src/utils"
	"github.com/gin-gonic/gin"
	"net/http"
)

type task struct {
	Id          interface{} `json:"id"`
	Title       interface{} `json:"title"`
	Description interface{} `json:"description"`
	Stage       interface{} `json:"stage"`
	State       interface{} `json:"state"`
	PlanEndDate interface{} `json:"plan_end_date"`
}

func GetNlaDocTaskList(c *gin.Context) {
	params := struct {
		Token string `json:"token"`
	}{}

	err := c.BindJSON(&params)
	if err != nil {
		utils.HttpError(c, http.StatusBadRequest, err.Error())
		return
	}

	// проверка токена системы
	err = checkSystemToken(params.Token)
	if err != nil {
		utils.HttpError(c, http.StatusBadRequest, err.Error())
		return
	}

	var res []task

	err = pg.CallPgFuncWithStruct("system_nla_doc_get_task_list", nil, &res)
	if err != nil {
		utils.HttpError(c, http.StatusBadRequest, err.Error())
		return
	}

	utils.HttpSuccess(c, res)
}

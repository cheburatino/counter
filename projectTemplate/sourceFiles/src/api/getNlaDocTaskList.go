package api

import (
	"github.com/cheburatino/electron_is/src/pg"
	"github.com/cheburatino/electron_is/src/utils"
	"github.com/gin-gonic/gin"
	"net/http"
)

type task struct {
	Id          interface{} `json:"id"`
	Title       interface{} `json:"title"`
	Description interface{} `json:"description"`
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

	//var res struct {
	//	TaskList []task `json:"task_list"`
	//}

	var res []task

	err = pg.CallPgFuncWithStruct("task_list", map[string]interface{}{"user_id": 1, "system_id": 13, "deleted": false}, &res)
	if err != nil {
		utils.HttpError(c, http.StatusBadRequest, err.Error())
		return
	}

	utils.HttpSuccess(c, res)
}

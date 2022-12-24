package api

import (
	"errors"
	"fmt"
	"github.com/cheburatino/electron_is/src/pg"
)

func checkSystemToken(token string) error {
	if len(token) != 30 {
		return errors.New(fmt.Sprintf("token lenght must be 30 instead of %d", len(token)))
	}

	err := pg.CallPgFuncWithStruct("system_token_check", map[string]interface{}{"token": token}, nil)
	if err != nil {
		return err
	}

	return nil
}

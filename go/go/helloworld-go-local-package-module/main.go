package main

import (
	"github.com/parkgang/helloworld-go-local-package-module/constants"
	"github.com/parkgang/helloworld-go-local-package-module/logics"
)

func main() {
	logics.Greeting(constants.NAME, constants.AGE)
}

module github.com/parkgang/helloworld-go-local-package-module

go 1.16

require (
	github.com/parkgang/helloworld-go-local-package-module/constants v0.0.0
	github.com/parkgang/helloworld-go-local-package-module/logics v0.0.0
)

replace (
	github.com/parkgang/helloworld-go-local-package-module/constants v0.0.0 => ./constants
	github.com/parkgang/helloworld-go-local-package-module/logics v0.0.0 => ./logics
)
package core

type DeveloperToolboxError struct {
	IsDeveloperToolboxError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewDeveloperToolboxError(code string, msg string, ctx *Context) *DeveloperToolboxError {
	return &DeveloperToolboxError{
		IsDeveloperToolboxError: true,
		Sdk:              "DeveloperToolbox",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *DeveloperToolboxError) Error() string {
	return e.Msg
}

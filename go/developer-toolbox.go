package voxgigdevelopertoolboxsdk

import (
	"github.com/voxgig-sdk/developer-toolbox-sdk/go/core"
	"github.com/voxgig-sdk/developer-toolbox-sdk/go/entity"
	"github.com/voxgig-sdk/developer-toolbox-sdk/go/feature"
	_ "github.com/voxgig-sdk/developer-toolbox-sdk/go/utility"
)

// Type aliases preserve external API.
type DeveloperToolboxSDK = core.DeveloperToolboxSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type DeveloperToolboxEntity = core.DeveloperToolboxEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type DeveloperToolboxError = core.DeveloperToolboxError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGeneratorEntityFunc = func(client *core.DeveloperToolboxSDK, entopts map[string]any) core.DeveloperToolboxEntity {
		return entity.NewGeneratorEntity(client, entopts)
	}
	core.NewUrlToolEntityFunc = func(client *core.DeveloperToolboxSDK, entopts map[string]any) core.DeveloperToolboxEntity {
		return entity.NewUrlToolEntity(client, entopts)
	}
	core.NewUtilityEntityFunc = func(client *core.DeveloperToolboxSDK, entopts map[string]any) core.DeveloperToolboxEntity {
		return entity.NewUtilityEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewDeveloperToolboxSDK = core.NewDeveloperToolboxSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewDeveloperToolboxSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *DeveloperToolboxSDK  { return NewDeveloperToolboxSDK(nil) }
func Test() *DeveloperToolboxSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

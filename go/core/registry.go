package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGeneratorEntityFunc func(client *DeveloperToolboxSDK, entopts map[string]any) DeveloperToolboxEntity

var NewUrlToolEntityFunc func(client *DeveloperToolboxSDK, entopts map[string]any) DeveloperToolboxEntity

var NewUtilityEntityFunc func(client *DeveloperToolboxSDK, entopts map[string]any) DeveloperToolboxEntity


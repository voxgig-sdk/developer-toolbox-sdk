package = "voxgig-sdk-developer-toolbox"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/developer-toolbox-sdk.git"
}
description = {
  summary = "DeveloperToolbox SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["developer-toolbox_sdk"] = "developer-toolbox_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

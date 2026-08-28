-- Typed models for the DeveloperToolbox SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Generator
---@field data string
---@field password? string
---@field size? number
---@field uuids? table

---@class GeneratorLoadMatch
---@field length? number
---@field lowercase? boolean
---@field number? boolean
---@field symbol? boolean
---@field uppercase? boolean

---@class GeneratorListMatch
---@field count? number
---@field type? string

---@class GeneratorCreateData
---@field data string
---@field password? string
---@field size? number
---@field uuids? table

---@class UrlTool
---@field customAlias? string
---@field originalUrl? string
---@field shortUrl? string
---@field url string

---@class UrlToolCreateData
---@field customAlias? string
---@field originalUrl? string
---@field shortUrl? string
---@field url string

---@class Utility
---@field algorithm? string
---@field decoded? string
---@field encoded string
---@field flags? string
---@field formatted? string
---@field hash? string
---@field header? table
---@field indent? number
---@field isMatch? boolean
---@field json string
---@field matches? table
---@field pattern string
---@field payload? table
---@field signature? string
---@field text string
---@field token string

---@class UtilityCreateData
---@field algorithm? string
---@field decoded? string
---@field encoded string
---@field flags? string
---@field formatted? string
---@field hash? string
---@field header? table
---@field indent? number
---@field isMatch? boolean
---@field json string
---@field matches? table
---@field pattern string
---@field payload? table
---@field signature? string
---@field text string
---@field token string

local M = {}

return M

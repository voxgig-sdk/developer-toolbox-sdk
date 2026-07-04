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
---@field uuid? table

---@class GeneratorLoadMatch

---@class GeneratorListMatch

---@class GeneratorCreateData

---@class UrlTool
---@field custom_alia? string
---@field original_url? string
---@field short_url? string
---@field url string

---@class UrlToolCreateData

---@class Utility
---@field algorithm? string
---@field decoded? string
---@field encoded string
---@field error? string
---@field flag? string
---@field formatted? string
---@field hash? string
---@field header? table
---@field indent? number
---@field is_match? boolean
---@field json string
---@field match? table
---@field parsed? table
---@field pattern string
---@field payload? table
---@field signature? string
---@field text string
---@field token string
---@field valid? boolean

---@class UtilityCreateData

local M = {}

return M

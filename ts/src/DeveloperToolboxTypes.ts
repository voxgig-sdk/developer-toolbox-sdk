// Typed models for the DeveloperToolbox SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Generator {
  data: string
  password?: string
  size?: number
  uuids?: any[]
}

export interface GeneratorLoadMatch {
  data?: string
  password?: string
  size?: number
  uuids?: any[]
}

export interface GeneratorListMatch {
  data?: string
  password?: string
  size?: number
  uuids?: any[]
}

export interface GeneratorCreateData {
  data: string
  password?: string
  size?: number
  uuids?: any[]
}

export interface UrlTool {
  customAlias?: string
  originalUrl?: string
  shortUrl?: string
  url: string
}

export interface UrlToolCreateData {
  customAlias?: string
  originalUrl?: string
  shortUrl?: string
  url: string
}

export interface Utility {
  algorithm?: string
  decoded?: string
  encoded: string
  flags?: string
  formatted?: string
  hash?: string
  header?: Record<string, any>
  indent?: number
  isMatch?: boolean
  json: string
  matches?: any[]
  pattern: string
  payload?: Record<string, any>
  signature?: string
  text: string
  token: string
}

export interface UtilityCreateData {
  algorithm?: string
  decoded?: string
  encoded: string
  flags?: string
  formatted?: string
  hash?: string
  header?: Record<string, any>
  indent?: number
  isMatch?: boolean
  json: string
  matches?: any[]
  pattern: string
  payload?: Record<string, any>
  signature?: string
  text: string
  token: string
}


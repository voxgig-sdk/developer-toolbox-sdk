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
  uuid?: any[]
}

export type GeneratorLoadMatch = Partial<Generator>

export type GeneratorListMatch = Partial<Generator>

export type GeneratorCreateData = Partial<Generator>

export interface UrlTool {
  custom_alia?: string
  original_url?: string
  short_url?: string
  url: string
}

export type UrlToolCreateData = Partial<UrlTool>

export interface Utility {
  algorithm?: string
  decoded?: string
  encoded: string
  error?: string
  flag?: string
  formatted?: string
  hash?: string
  header?: Record<string, any>
  indent?: number
  is_match?: boolean
  json: string
  match?: any[]
  parsed?: Record<string, any>
  pattern: string
  payload?: Record<string, any>
  signature?: string
  text: string
  token: string
  valid?: boolean
}

export type UtilityCreateData = Partial<Utility>


# frozen_string_literal: true

# Typed models for the DeveloperToolbox SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Generator entity data model.
#
# @!attribute [rw] data
#   @return [String]
#
# @!attribute [rw] password
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] uuid
#   @return [Array, nil]
Generator = Struct.new(
  :data,
  :password,
  :size,
  :uuid,
  keyword_init: true
)

# Match filter for Generator#load (any subset of Generator fields).
#
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] uuid
#   @return [Array, nil]
GeneratorLoadMatch = Struct.new(
  :data,
  :password,
  :size,
  :uuid,
  keyword_init: true
)

# Match filter for Generator#list (any subset of Generator fields).
#
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] uuid
#   @return [Array, nil]
GeneratorListMatch = Struct.new(
  :data,
  :password,
  :size,
  :uuid,
  keyword_init: true
)

# Match filter for Generator#create (any subset of Generator fields).
#
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] uuid
#   @return [Array, nil]
GeneratorCreateData = Struct.new(
  :data,
  :password,
  :size,
  :uuid,
  keyword_init: true
)

# UrlTool entity data model.
#
# @!attribute [rw] custom_alia
#   @return [String, nil]
#
# @!attribute [rw] original_url
#   @return [String, nil]
#
# @!attribute [rw] short_url
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
UrlTool = Struct.new(
  :custom_alia,
  :original_url,
  :short_url,
  :url,
  keyword_init: true
)

# Match filter for UrlTool#create (any subset of UrlTool fields).
#
# @!attribute [rw] custom_alia
#   @return [String, nil]
#
# @!attribute [rw] original_url
#   @return [String, nil]
#
# @!attribute [rw] short_url
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
UrlToolCreateData = Struct.new(
  :custom_alia,
  :original_url,
  :short_url,
  :url,
  keyword_init: true
)

# Utility entity data model.
#
# @!attribute [rw] algorithm
#   @return [String, nil]
#
# @!attribute [rw] decoded
#   @return [String, nil]
#
# @!attribute [rw] encoded
#   @return [String]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] flag
#   @return [String, nil]
#
# @!attribute [rw] formatted
#   @return [String, nil]
#
# @!attribute [rw] hash
#   @return [String, nil]
#
# @!attribute [rw] header
#   @return [Hash, nil]
#
# @!attribute [rw] indent
#   @return [Integer, nil]
#
# @!attribute [rw] is_match
#   @return [Boolean, nil]
#
# @!attribute [rw] json
#   @return [String]
#
# @!attribute [rw] match
#   @return [Array, nil]
#
# @!attribute [rw] parsed
#   @return [Hash, nil]
#
# @!attribute [rw] pattern
#   @return [String]
#
# @!attribute [rw] payload
#   @return [Hash, nil]
#
# @!attribute [rw] signature
#   @return [String, nil]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] token
#   @return [String]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
Utility = Struct.new(
  :algorithm,
  :decoded,
  :encoded,
  :error,
  :flag,
  :formatted,
  :hash,
  :header,
  :indent,
  :is_match,
  :json,
  :match,
  :parsed,
  :pattern,
  :payload,
  :signature,
  :text,
  :token,
  :valid,
  keyword_init: true
)

# Match filter for Utility#create (any subset of Utility fields).
#
# @!attribute [rw] algorithm
#   @return [String, nil]
#
# @!attribute [rw] decoded
#   @return [String, nil]
#
# @!attribute [rw] encoded
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] flag
#   @return [String, nil]
#
# @!attribute [rw] formatted
#   @return [String, nil]
#
# @!attribute [rw] hash
#   @return [String, nil]
#
# @!attribute [rw] header
#   @return [Hash, nil]
#
# @!attribute [rw] indent
#   @return [Integer, nil]
#
# @!attribute [rw] is_match
#   @return [Boolean, nil]
#
# @!attribute [rw] json
#   @return [String, nil]
#
# @!attribute [rw] match
#   @return [Array, nil]
#
# @!attribute [rw] parsed
#   @return [Hash, nil]
#
# @!attribute [rw] pattern
#   @return [String, nil]
#
# @!attribute [rw] payload
#   @return [Hash, nil]
#
# @!attribute [rw] signature
#   @return [String, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
UtilityCreateData = Struct.new(
  :algorithm,
  :decoded,
  :encoded,
  :error,
  :flag,
  :formatted,
  :hash,
  :header,
  :indent,
  :is_match,
  :json,
  :match,
  :parsed,
  :pattern,
  :payload,
  :signature,
  :text,
  :token,
  :valid,
  keyword_init: true
)


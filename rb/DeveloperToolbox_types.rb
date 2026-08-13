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
# @!attribute [rw] uuids
#   @return [Array, nil]
Generator = Struct.new(
  :data,
  :password,
  :size,
  :uuids,
  keyword_init: true
)

# Request payload for Generator#load.
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
# @!attribute [rw] uuids
#   @return [Array, nil]
GeneratorLoadMatch = Struct.new(
  :data,
  :password,
  :size,
  :uuids,
  keyword_init: true
)

# Request payload for Generator#list.
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
# @!attribute [rw] uuids
#   @return [Array, nil]
GeneratorListMatch = Struct.new(
  :data,
  :password,
  :size,
  :uuids,
  keyword_init: true
)

# Request payload for Generator#create.
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
# @!attribute [rw] uuids
#   @return [Array, nil]
GeneratorCreateData = Struct.new(
  :data,
  :password,
  :size,
  :uuids,
  keyword_init: true
)

# UrlTool entity data model.
#
# @!attribute [rw] customAlias
#   @return [String, nil]
#
# @!attribute [rw] originalUrl
#   @return [String, nil]
#
# @!attribute [rw] shortUrl
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
UrlTool = Struct.new(
  :customAlias,
  :originalUrl,
  :shortUrl,
  :url,
  keyword_init: true
)

# Request payload for UrlTool#create.
#
# @!attribute [rw] customAlias
#   @return [String, nil]
#
# @!attribute [rw] originalUrl
#   @return [String, nil]
#
# @!attribute [rw] shortUrl
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
UrlToolCreateData = Struct.new(
  :customAlias,
  :originalUrl,
  :shortUrl,
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
# @!attribute [rw] flags
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
# @!attribute [rw] isMatch
#   @return [Boolean, nil]
#
# @!attribute [rw] json
#   @return [String]
#
# @!attribute [rw] matches
#   @return [Array, nil]
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
Utility = Struct.new(
  :algorithm,
  :decoded,
  :encoded,
  :flags,
  :formatted,
  :hash,
  :header,
  :indent,
  :isMatch,
  :json,
  :matches,
  :pattern,
  :payload,
  :signature,
  :text,
  :token,
  keyword_init: true
)

# Request payload for Utility#create.
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
# @!attribute [rw] flags
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
# @!attribute [rw] isMatch
#   @return [Boolean, nil]
#
# @!attribute [rw] json
#   @return [String]
#
# @!attribute [rw] matches
#   @return [Array, nil]
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
UtilityCreateData = Struct.new(
  :algorithm,
  :decoded,
  :encoded,
  :flags,
  :formatted,
  :hash,
  :header,
  :indent,
  :isMatch,
  :json,
  :matches,
  :pattern,
  :payload,
  :signature,
  :text,
  :token,
  keyword_init: true
)


# DeveloperToolbox SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

DeveloperToolboxUtility.registrar = ->(u) {
  u.clean = DeveloperToolboxUtilities::Clean
  u.done = DeveloperToolboxUtilities::Done
  u.make_error = DeveloperToolboxUtilities::MakeError
  u.feature_add = DeveloperToolboxUtilities::FeatureAdd
  u.feature_hook = DeveloperToolboxUtilities::FeatureHook
  u.feature_init = DeveloperToolboxUtilities::FeatureInit
  u.fetcher = DeveloperToolboxUtilities::Fetcher
  u.make_fetch_def = DeveloperToolboxUtilities::MakeFetchDef
  u.make_context = DeveloperToolboxUtilities::MakeContext
  u.make_options = DeveloperToolboxUtilities::MakeOptions
  u.make_request = DeveloperToolboxUtilities::MakeRequest
  u.make_response = DeveloperToolboxUtilities::MakeResponse
  u.make_result = DeveloperToolboxUtilities::MakeResult
  u.make_point = DeveloperToolboxUtilities::MakePoint
  u.make_spec = DeveloperToolboxUtilities::MakeSpec
  u.make_url = DeveloperToolboxUtilities::MakeUrl
  u.param = DeveloperToolboxUtilities::Param
  u.prepare_auth = DeveloperToolboxUtilities::PrepareAuth
  u.prepare_body = DeveloperToolboxUtilities::PrepareBody
  u.prepare_headers = DeveloperToolboxUtilities::PrepareHeaders
  u.prepare_method = DeveloperToolboxUtilities::PrepareMethod
  u.prepare_params = DeveloperToolboxUtilities::PrepareParams
  u.prepare_path = DeveloperToolboxUtilities::PreparePath
  u.prepare_query = DeveloperToolboxUtilities::PrepareQuery
  u.result_basic = DeveloperToolboxUtilities::ResultBasic
  u.result_body = DeveloperToolboxUtilities::ResultBody
  u.result_headers = DeveloperToolboxUtilities::ResultHeaders
  u.transform_request = DeveloperToolboxUtilities::TransformRequest
  u.transform_response = DeveloperToolboxUtilities::TransformResponse
}

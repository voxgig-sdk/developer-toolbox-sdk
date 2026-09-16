# DeveloperToolbox SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DeveloperToolboxFeatures
  def self.make_feature(name)
    case name
    when "base"
      DeveloperToolboxBaseFeature.new
    when "ratelimit"
      DeveloperToolboxRatelimitFeature.new
    when "retry"
      DeveloperToolboxRetryFeature.new
    when "test"
      DeveloperToolboxTestFeature.new
    when "timeout"
      DeveloperToolboxTimeoutFeature.new
    else
      DeveloperToolboxBaseFeature.new
    end
  end
end

# DeveloperToolbox SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module DeveloperToolboxFeatures
  def self.make_feature(name)
    case name
    when "base"
      DeveloperToolboxBaseFeature.new
    when "test"
      DeveloperToolboxTestFeature.new
    else
      DeveloperToolboxBaseFeature.new
    end
  end
end

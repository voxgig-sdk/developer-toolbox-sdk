# DeveloperToolbox SDK exists test

require "minitest/autorun"
require_relative "../DeveloperToolbox_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = DeveloperToolboxSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

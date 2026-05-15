# UrlTool entity test

require "minitest/autorun"
require "json"
require_relative "../DeveloperToolbox_sdk"
require_relative "runner"

class UrlToolEntityTest < Minitest::Test
  def test_create_instance
    testsdk = DeveloperToolboxSDK.test(nil, nil)
    ent = testsdk.UrlTool(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = url_tool_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "url_tool." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set DEVELOPERTOOLBOX_TEST_URL_TOOL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    url_tool_ref01_ent = client.UrlTool(nil)
    url_tool_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.url_tool"), "url_tool_ref01"))

    url_tool_ref01_data_result, err = url_tool_ref01_ent.create(url_tool_ref01_data, nil)
    assert_nil err
    url_tool_ref01_data = Helpers.to_map(url_tool_ref01_data_result)
    assert !url_tool_ref01_data.nil?

  end
end

def url_tool_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "url_tool", "UrlToolTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = DeveloperToolboxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["url_tool01", "url_tool02", "url_tool03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["DEVELOPERTOOLBOX_TEST_URL_TOOL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "DEVELOPERTOOLBOX_TEST_URL_TOOL_ENTID" => idmap,
    "DEVELOPERTOOLBOX_TEST_LIVE" => "FALSE",
    "DEVELOPERTOOLBOX_TEST_EXPLAIN" => "FALSE",
    "DEVELOPERTOOLBOX_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["DEVELOPERTOOLBOX_TEST_URL_TOOL_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["DEVELOPERTOOLBOX_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["DEVELOPERTOOLBOX_APIKEY"],
      },
      extra || {},
    ])
    client = DeveloperToolboxSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["DEVELOPERTOOLBOX_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["DEVELOPERTOOLBOX_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end

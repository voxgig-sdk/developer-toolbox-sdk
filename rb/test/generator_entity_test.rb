# Generator entity test

require "minitest/autorun"
require "json"
require_relative "../DeveloperToolbox_sdk"
require_relative "runner"

class GeneratorEntityTest < Minitest::Test
  def test_create_instance
    testsdk = DeveloperToolboxSDK.test(nil, nil)
    ent = testsdk.Generator(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = generator_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "generator." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set DEVELOPERTOOLBOX_TEST_GENERATOR_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    generator_ref01_ent = client.Generator(nil)
    generator_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.generator"), "generator_ref01"))

    generator_ref01_data_result, err = generator_ref01_ent.create(generator_ref01_data, nil)
    assert_nil err
    generator_ref01_data = Helpers.to_map(generator_ref01_data_result)
    assert !generator_ref01_data.nil?

    # LIST
    generator_ref01_match = {}

    generator_ref01_list_result, err = generator_ref01_ent.list(generator_ref01_match, nil)
    assert_nil err
    assert generator_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(generator_ref01_list_result),
      { "id" => generator_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # LOAD
    generator_ref01_match_dt0 = {}
    generator_ref01_data_dt0_loaded, err = generator_ref01_ent.load(generator_ref01_match_dt0, nil)
    assert_nil err
    assert !generator_ref01_data_dt0_loaded.nil?

  end
end

def generator_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "generator", "GeneratorTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = DeveloperToolboxSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["generator01", "generator02", "generator03"],
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
  entid_env_raw = ENV["DEVELOPERTOOLBOX_TEST_GENERATOR_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "DEVELOPERTOOLBOX_TEST_GENERATOR_ENTID" => idmap,
    "DEVELOPERTOOLBOX_TEST_LIVE" => "FALSE",
    "DEVELOPERTOOLBOX_TEST_EXPLAIN" => "FALSE",
    "DEVELOPERTOOLBOX_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["DEVELOPERTOOLBOX_TEST_GENERATOR_ENTID"])
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

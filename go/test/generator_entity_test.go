package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/developer-toolbox-sdk/go"
	"github.com/voxgig-sdk/developer-toolbox-sdk/go/core"

	vs "github.com/voxgig-sdk/developer-toolbox-sdk/go/utility/struct"
)

func TestGeneratorEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Generator(nil)
		if ent == nil {
			t.Fatal("expected non-nil GeneratorEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := generatorBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "generator." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set DEVELOPERTOOLBOX_TEST_GENERATOR_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		generatorRef01Ent := client.Generator(nil)
		generatorRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "generator"}, setup.data), "generator_ref01"))

		generatorRef01DataResult, err := generatorRef01Ent.Create(generatorRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		generatorRef01Data = core.ToMapAny(generatorRef01DataResult)
		if generatorRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		generatorRef01Match := map[string]any{}

		generatorRef01ListResult, err := generatorRef01Ent.List(generatorRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		generatorRef01List, generatorRef01ListOk := generatorRef01ListResult.([]any)
		if !generatorRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", generatorRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(generatorRef01List), map[string]any{"id": generatorRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		generatorRef01MatchDt0 := map[string]any{}
		generatorRef01DataDt0Loaded, err := generatorRef01Ent.Load(generatorRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if generatorRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func generatorBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "generator", "GeneratorTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read generator test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse generator test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"generator01", "generator02", "generator03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("DEVELOPERTOOLBOX_TEST_GENERATOR_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"DEVELOPERTOOLBOX_TEST_GENERATOR_ENTID": idmap,
		"DEVELOPERTOOLBOX_TEST_LIVE":      "FALSE",
		"DEVELOPERTOOLBOX_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["DEVELOPERTOOLBOX_TEST_GENERATOR_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["DEVELOPERTOOLBOX_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewDeveloperToolboxSDK(core.ToMapAny(mergedOpts))
	}

	live := env["DEVELOPERTOOLBOX_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["DEVELOPERTOOLBOX_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}

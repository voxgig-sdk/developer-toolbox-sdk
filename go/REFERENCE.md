# DeveloperToolbox Golang SDK Reference

Complete API reference for the DeveloperToolbox Golang SDK.


## DeveloperToolboxSDK

### Constructor

```go
func NewDeveloperToolboxSDK(options map[string]any) *DeveloperToolboxSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *DeveloperToolboxSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *DeveloperToolboxSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Generator(data map[string]any) DeveloperToolboxEntity`

Create a new `Generator` entity instance. Pass `nil` for no initial data.

#### `UrlTool(data map[string]any) DeveloperToolboxEntity`

Create a new `UrlTool` entity instance. Pass `nil` for no initial data.

#### `Utility(data map[string]any) DeveloperToolboxEntity`

Create a new `Utility` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## GeneratorEntity

```go
generator := client.Generator(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `string` | Yes |  |
| `password` | `string` | No |  |
| `size` | `int` | No |  |
| `uuid` | `[]any` | No |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `data` | - | Yes | - |
| `password` | - | - | - |
| `size` | - | - | - |
| `uuid` | - | - | - |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Generator(nil).Create(map[string]any{
    "data": /* string */,
}, nil)
```

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Generator(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Generator(nil).Load(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeneratorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UrlToolEntity

```go
url_tool := client.UrlTool(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_alia` | `string` | No |  |
| `original_url` | `string` | No |  |
| `short_url` | `string` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UrlTool(nil).Create(map[string]any{
    "url": /* string */,
}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UrlToolEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UtilityEntity

```go
utility := client.Utility(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `algorithm` | `string` | No |  |
| `decoded` | `string` | No |  |
| `encoded` | `string` | Yes |  |
| `error` | `string` | No |  |
| `flag` | `string` | No |  |
| `formatted` | `string` | No |  |
| `hash` | `string` | No |  |
| `header` | `map[string]any` | No |  |
| `indent` | `int` | No |  |
| `is_match` | `bool` | No |  |
| `json` | `string` | Yes |  |
| `match` | `[]any` | No |  |
| `parsed` | `map[string]any` | No |  |
| `pattern` | `string` | Yes |  |
| `payload` | `map[string]any` | No |  |
| `signature` | `string` | No |  |
| `text` | `string` | Yes |  |
| `token` | `string` | Yes |  |
| `valid` | `bool` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `algorithm` | - |
| `decoded` | - |
| `encoded` | Yes |
| `error` | - |
| `flag` | - |
| `formatted` | - |
| `hash` | - |
| `header` | - |
| `indent` | - |
| `is_match` | - |
| `json` | - |
| `match` | - |
| `parsed` | - |
| `pattern` | - |
| `payload` | - |
| `signature` | - |
| `text` | - |
| `token` | - |
| `valid` | - |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Utility(nil).Create(map[string]any{
    "encoded": /* string */,
    "json": /* string */,
    "pattern": /* string */,
    "text": /* string */,
    "token": /* string */,
}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UtilityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewDeveloperToolboxSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```


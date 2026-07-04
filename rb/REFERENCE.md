# DeveloperToolbox Ruby SDK Reference

Complete API reference for the DeveloperToolbox Ruby SDK.


## DeveloperToolboxSDK

### Constructor

```ruby
require_relative 'developer-toolbox_sdk'

client = DeveloperToolboxSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DeveloperToolboxSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = DeveloperToolboxSDK.test
```


### Instance Methods

#### `Generator(data = nil)`

Create a new `Generator` entity instance. Pass `nil` for no initial data.

#### `UrlTool(data = nil)`

Create a new `UrlTool` entity instance. Pass `nil` for no initial data.

#### `Utility(data = nil)`

Create a new `Utility` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## GeneratorEntity

```ruby
generator = client.Generator
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$STRING`` | Yes |  |
| `password` | ``$STRING`` | No |  |
| `size` | ``$INTEGER`` | No |  |
| `uuid` | ``$ARRAY`` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `data` | - | Yes | - | - | - |
| `password` | - | - | - | - | - |
| `size` | - | - | - | - | - |
| `uuid` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Generator.create({
  "data" => # `$STRING`,
})
```

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Generator.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Generator.load({ "id" => "generator_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeneratorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UrlToolEntity

```ruby
url_tool = client.UrlTool
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_alia` | ``$STRING`` | No |  |
| `original_url` | ``$STRING`` | No |  |
| `short_url` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UrlTool.create({
  "url" => # `$STRING`,
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UrlToolEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UtilityEntity

```ruby
utility = client.Utility
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `algorithm` | ``$STRING`` | No |  |
| `decoded` | ``$STRING`` | No |  |
| `encoded` | ``$STRING`` | Yes |  |
| `error` | ``$STRING`` | No |  |
| `flag` | ``$STRING`` | No |  |
| `formatted` | ``$STRING`` | No |  |
| `hash` | ``$STRING`` | No |  |
| `header` | ``$OBJECT`` | No |  |
| `indent` | ``$INTEGER`` | No |  |
| `is_match` | ``$BOOLEAN`` | No |  |
| `json` | ``$STRING`` | Yes |  |
| `match` | ``$ARRAY`` | No |  |
| `parsed` | ``$OBJECT`` | No |  |
| `pattern` | ``$STRING`` | Yes |  |
| `payload` | ``$OBJECT`` | No |  |
| `signature` | ``$STRING`` | No |  |
| `text` | ``$STRING`` | Yes |  |
| `token` | ``$STRING`` | Yes |  |
| `valid` | ``$BOOLEAN`` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `algorithm` | - | - | - | - | - |
| `decoded` | - | - | - | - | - |
| `encoded` | - | - | Yes | - | - |
| `error` | - | - | - | - | - |
| `flag` | - | - | - | - | - |
| `formatted` | - | - | - | - | - |
| `hash` | - | - | - | - | - |
| `header` | - | - | - | - | - |
| `indent` | - | - | - | - | - |
| `is_match` | - | - | - | - | - |
| `json` | - | - | - | - | - |
| `match` | - | - | - | - | - |
| `parsed` | - | - | - | - | - |
| `pattern` | - | - | - | - | - |
| `payload` | - | - | - | - | - |
| `signature` | - | - | - | - | - |
| `text` | - | - | - | - | - |
| `token` | - | - | - | - | - |
| `valid` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Utility.create({
  "encoded" => # `$STRING`,
  "json" => # `$STRING`,
  "pattern" => # `$STRING`,
  "text" => # `$STRING`,
  "token" => # `$STRING`,
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UtilityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = DeveloperToolboxSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```


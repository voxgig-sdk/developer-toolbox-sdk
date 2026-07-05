# DeveloperToolbox PHP SDK Reference

Complete API reference for the DeveloperToolbox PHP SDK.


## DeveloperToolboxSDK

### Constructor

```php
require_once __DIR__ . '/developertoolbox_sdk.php';

$client = new DeveloperToolboxSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DeveloperToolboxSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = DeveloperToolboxSDK::test();
```


### Instance Methods

#### `Generator($data = null)`

Create a new `GeneratorEntity` instance. Pass `null` for no initial data.

#### `UrlTool($data = null)`

Create a new `UrlToolEntity` instance. Pass `null` for no initial data.

#### `Utility($data = null)`

Create a new `UtilityEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): DeveloperToolboxUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## GeneratorEntity

```php
$generator = $client->Generator();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `string` | Yes |  |
| `password` | `string` | No |  |
| `size` | `int` | No |  |
| `uuid` | `array` | No |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `data` | - | Yes | - |
| `password` | - | - | - |
| `size` | - | - | - |
| `uuid` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Generator()->create([
  "data" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Generator()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Generator()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeneratorEntity`

Create a new `GeneratorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UrlToolEntity

```php
$url_tool = $client->UrlTool();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_alia` | `string` | No |  |
| `original_url` | `string` | No |  |
| `short_url` | `string` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UrlTool()->create([
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UrlToolEntity`

Create a new `UrlToolEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UtilityEntity

```php
$utility = $client->Utility();
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
| `header` | `array` | No |  |
| `indent` | `int` | No |  |
| `is_match` | `bool` | No |  |
| `json` | `string` | Yes |  |
| `match` | `array` | No |  |
| `parsed` | `array` | No |  |
| `pattern` | `string` | Yes |  |
| `payload` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Utility()->create([
  "encoded" => null, // string
  "json" => null, // string
  "pattern" => null, // string
  "text" => null, // string
  "token" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UtilityEntity`

Create a new `UtilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new DeveloperToolboxSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


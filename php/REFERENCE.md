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
| `data` | `string` | Yes | Text or URL to encode in QR code |
| `password` | `string` | No |  |
| `size` | `int` | No | Size of QR code in pixels |
| `uuids` | `array` | No |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `data` | - | Yes | - |
| `password` | - | - | - |
| `size` | - | - | - |
| `uuids` | - | - | - |

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
| `customAlias` | `string` | No | Custom alias for shortened URL |
| `originalUrl` | `string` | No |  |
| `shortUrl` | `string` | No |  |
| `url` | `string` | Yes | URL to shorten |

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
| `algorithm` | `string` | No | Hashing algorithm to use |
| `decoded` | `string` | No |  |
| `encoded` | `string` | Yes | Base64 encoded text to decode |
| `flags` | `string` | No | Regex flags (g, i, m, s, u, y) |
| `formatted` | `string` | No |  |
| `hash` | `string` | No |  |
| `header` | `array` | No |  |
| `indent` | `int` | No | Number of spaces for indentation |
| `isMatch` | `bool` | No |  |
| `json` | `string` | Yes | JSON string to format |
| `matches` | `array` | No |  |
| `pattern` | `string` | Yes | Regular expression pattern |
| `payload` | `array` | No |  |
| `signature` | `string` | No |  |
| `text` | `string` | Yes | Text to encode |
| `token` | `string` | Yes | JWT token to decode |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `algorithm` | - |
| `decoded` | - |
| `encoded` | Yes |
| `flags` | - |
| `formatted` | - |
| `hash` | - |
| `header` | - |
| `indent` | - |
| `isMatch` | - |
| `json` | - |
| `matches` | - |
| `pattern` | - |
| `payload` | - |
| `signature` | - |
| `text` | - |
| `token` | - |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.


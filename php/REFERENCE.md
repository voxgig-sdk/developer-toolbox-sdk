# DeveloperToolbox PHP SDK Reference

Complete API reference for the DeveloperToolbox PHP SDK.


## DeveloperToolboxSDK

### Constructor

```php
require_once __DIR__ . '/developer-toolbox_sdk.php';

$client = new DeveloperToolboxSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## GeneratorEntity

```php
$generator = $client->Generator();
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

#### `create(array $reqdata, ?array $ctrl = null): array`

Create a new entity with the given data.

```php
[$result, $err] = $client->Generator()->create([
  "data" => /* `$STRING` */,
]);
```

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Generator()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Generator()->load(["id" => "generator_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GeneratorEntity`

Create a new `GeneratorEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## UrlToolEntity

```php
$url_tool = $client->UrlTool();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_alia` | ``$STRING`` | No |  |
| `original_url` | ``$STRING`` | No |  |
| `short_url` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): array`

Create a new entity with the given data.

```php
[$result, $err] = $client->UrlTool()->create([
  "url" => /* `$STRING` */,
]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): UrlToolEntity`

Create a new `UrlToolEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## UtilityEntity

```php
$utility = $client->Utility();
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

#### `create(array $reqdata, ?array $ctrl = null): array`

Create a new entity with the given data.

```php
[$result, $err] = $client->Utility()->create([
  "encoded" => /* `$STRING` */,
  "json" => /* `$STRING` */,
  "pattern" => /* `$STRING` */,
  "text" => /* `$STRING` */,
  "token" => /* `$STRING` */,
]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): UtilityEntity`

Create a new `UtilityEntity` instance with the same client and
options.

#### `getName(): string`

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


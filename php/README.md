# DeveloperToolbox PHP SDK



The PHP SDK for the DeveloperToolbox API — an entity-oriented client using PHP conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/developer-toolbox-sdk/releases](https://github.com/voxgig-sdk/developer-toolbox-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'developertoolbox_sdk.php';

$client = new DeveloperToolboxSDK();
```

### 2. List generator records

```php
try {
    // list() returns an array of Generator records — iterate directly.
    $generators = $client->Generator()->list();
    foreach ($generators as $item) {
        echo $item["id"] . " " . $item["name"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a generator

```php
try {
    // load() returns the bare Generator record (throws on error).
    $generator = $client->Generator()->load(["id" => "example_id"]);
    print_r($generator);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the bare created Generator record.
$created = $client->Generator()->create(["name" => "Example"]);

```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    echo "Error: " . $result["err"]->getMessage();
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = DeveloperToolboxSDK::test([
    "entity" => ["generator" => ["test01" => ["id" => "test01"]]],
]);

// load() returns the bare mock record (throws on error).
$generator = $client->Generator()->load(["id" => "test01"]);
print_r($generator);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new DeveloperToolboxSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
DEVELOPER_TOOLBOX_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### DeveloperToolboxSDK

```php
require_once 'developertoolbox_sdk.php';
$client = new DeveloperToolboxSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = DeveloperToolboxSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### DeveloperToolboxSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Generator` | `($data): GeneratorEntity` | Create a Generator entity instance. |
| `UrlTool` | `($data): UrlToolEntity` | Create an UrlTool entity instance. |
| `Utility` | `($data): UtilityEntity` | Create an Utility entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Generator

| Field | Description |
| --- | --- |
| `data` |  |
| `password` |  |
| `size` |  |
| `uuid` |  |

Operations: Create, List, Load.

API path: `/api/qrcode`

#### UrlTool

| Field | Description |
| --- | --- |
| `custom_alia` |  |
| `original_url` |  |
| `short_url` |  |
| `url` |  |

Operations: Create.

API path: `/api/url/shorten`

#### Utility

| Field | Description |
| --- | --- |
| `algorithm` |  |
| `decoded` |  |
| `encoded` |  |
| `error` |  |
| `flag` |  |
| `formatted` |  |
| `hash` |  |
| `header` |  |
| `indent` |  |
| `is_match` |  |
| `json` |  |
| `match` |  |
| `parsed` |  |
| `pattern` |  |
| `payload` |  |
| `signature` |  |
| `text` |  |
| `token` |  |
| `valid` |  |

Operations: Create.

API path: `/api/base64/decode`



## Entities


### Generator

Create an instance: `$generator = $client->Generator();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$STRING`` |  |
| `password` | ``$STRING`` |  |
| `size` | ``$INTEGER`` |  |
| `uuid` | ``$ARRAY`` |  |

#### Example: Load

```php
// load() returns the bare Generator record (throws on error).
$generator = $client->Generator()->load(["id" => "generator_id"]);
```

#### Example: List

```php
// list() returns an array of Generator records (throws on error).
$generators = $client->Generator()->list();
```

#### Example: Create

```php
$generator = $client->Generator()->create([
    "data" => null, // `$STRING`
]);
```


### UrlTool

Create an instance: `$url_tool = $client->UrlTool();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_alia` | ``$STRING`` |  |
| `original_url` | ``$STRING`` |  |
| `short_url` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: Create

```php
$url_tool = $client->UrlTool()->create([
    "url" => null, // `$STRING`
]);
```


### Utility

Create an instance: `$utility = $client->Utility();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `algorithm` | ``$STRING`` |  |
| `decoded` | ``$STRING`` |  |
| `encoded` | ``$STRING`` |  |
| `error` | ``$STRING`` |  |
| `flag` | ``$STRING`` |  |
| `formatted` | ``$STRING`` |  |
| `hash` | ``$STRING`` |  |
| `header` | ``$OBJECT`` |  |
| `indent` | ``$INTEGER`` |  |
| `is_match` | ``$BOOLEAN`` |  |
| `json` | ``$STRING`` |  |
| `match` | ``$ARRAY`` |  |
| `parsed` | ``$OBJECT`` |  |
| `pattern` | ``$STRING`` |  |
| `payload` | ``$OBJECT`` |  |
| `signature` | ``$STRING`` |  |
| `text` | ``$STRING`` |  |
| `token` | ``$STRING`` |  |
| `valid` | ``$BOOLEAN`` |  |

#### Example: Create

```php
$utility = $client->Utility()->create([
    "encoded" => null, // `$STRING`
    "json" => null, // `$STRING`
    "pattern" => null, // `$STRING`
    "text" => null, // `$STRING`
    "token" => null, // `$STRING`
]);
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return array.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── developertoolbox_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`developertoolbox_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$generator = $client->Generator();
$generator->load(["id" => "example_id"]);

// $generator->dataGet() now returns the loaded generator data
// $generator->matchGet() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

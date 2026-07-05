# DeveloperToolbox Golang SDK



The Golang SDK for the DeveloperToolbox API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Generator(nil)` — each with the same small set of operations (`List`, `Load`, `Create`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/developer-toolbox-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/developer-toolbox-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/developer-toolbox-sdk/go=../developer-toolbox-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/developer-toolbox-sdk/go"
)

func main() {
    client := sdk.New()

    // List generator records — the value is the array of records itself.
    generators, err := client.Generator(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range generators.([]any) {
        fmt.Println(item)
    }

    // Load a single generator — the value is the loaded record.
    generator, err := client.Generator(nil).Load(nil, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(generator)

    // Create a generator.
    created, err := client.Generator(nil).Create(map[string]any{"data": "example"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
generators, err := client.Generator(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = generators
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

generator, err := client.Generator(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(generator) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewDeveloperToolboxSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
DEVELOPER_TOOLBOX_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewDeveloperToolboxSDK

```go
func NewDeveloperToolboxSDK(options map[string]any) *DeveloperToolboxSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *DeveloperToolboxSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### DeveloperToolboxSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Generator` | `(data map[string]any) DeveloperToolboxEntity` | Create a Generator entity instance. |
| `UrlTool` | `(data map[string]any) DeveloperToolboxEntity` | Create an UrlTool entity instance. |
| `Utility` | `(data map[string]any) DeveloperToolboxEntity` | Create an Utility entity instance. |

### Entity interface (DeveloperToolboxEntity)

All entities implement the `DeveloperToolboxEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    generator, err := client.Generator(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // generator is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Generator

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"password"` |  |
| `"size"` |  |
| `"uuid"` |  |

Operations: Create, List, Load.

API path: `/api/qrcode`

#### UrlTool

| Field | Description |
| --- | --- |
| `"custom_alia"` |  |
| `"original_url"` |  |
| `"short_url"` |  |
| `"url"` |  |

Operations: Create.

API path: `/api/url/shorten`

#### Utility

| Field | Description |
| --- | --- |
| `"algorithm"` |  |
| `"decoded"` |  |
| `"encoded"` |  |
| `"error"` |  |
| `"flag"` |  |
| `"formatted"` |  |
| `"hash"` |  |
| `"header"` |  |
| `"indent"` |  |
| `"is_match"` |  |
| `"json"` |  |
| `"match"` |  |
| `"parsed"` |  |
| `"pattern"` |  |
| `"payload"` |  |
| `"signature"` |  |
| `"text"` |  |
| `"token"` |  |
| `"valid"` |  |

Operations: Create.

API path: `/api/base64/decode`



## Entities


### Generator

Create an instance: `generator := client.Generator(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `string` |  |
| `password` | `string` |  |
| `size` | `int` |  |
| `uuid` | `[]any` |  |

#### Example: Load

```go
generator, err := client.Generator(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(generator) // the loaded record
```

#### Example: List

```go
generators, err := client.Generator(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(generators) // the array of records
```

#### Example: Create

```go
result, err := client.Generator(nil).Create(map[string]any{
    "data": /* string */,
}, nil)
```


### UrlTool

Create an instance: `url_tool := client.UrlTool(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_alia` | `string` |  |
| `original_url` | `string` |  |
| `short_url` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```go
result, err := client.UrlTool(nil).Create(map[string]any{
    "url": /* string */,
}, nil)
```


### Utility

Create an instance: `utility := client.Utility(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `algorithm` | `string` |  |
| `decoded` | `string` |  |
| `encoded` | `string` |  |
| `error` | `string` |  |
| `flag` | `string` |  |
| `formatted` | `string` |  |
| `hash` | `string` |  |
| `header` | `map[string]any` |  |
| `indent` | `int` |  |
| `is_match` | `bool` |  |
| `json` | `string` |  |
| `match` | `[]any` |  |
| `parsed` | `map[string]any` |  |
| `pattern` | `string` |  |
| `payload` | `map[string]any` |  |
| `signature` | `string` |  |
| `text` | `string` |  |
| `token` | `string` |  |
| `valid` | `bool` |  |

#### Example: Create

```go
result, err := client.Utility(nil).Create(map[string]any{
    "encoded": /* string */,
    "json": /* string */,
    "pattern": /* string */,
    "text": /* string */,
    "token": /* string */,
}, nil)
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

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

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/developer-toolbox-sdk/go/
├── developer-toolbox.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/developer-toolbox-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
generator := client.Generator(nil)
generator.List(nil, nil)

// generator.Data() now returns the generator data from the last list
// generator.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

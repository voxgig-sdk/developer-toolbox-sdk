# DeveloperToolbox SDK



Available for [Golang](go/) and [Go CLI](go-cli/) and [Lua](lua/) and [PHP](php/) and [Python](py/) and [Ruby](rb/) and [TypeScript](ts/).


## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Generator** |  | `/api/qrcode` |
| **UrlTool** |  | `/api/url/shorten` |
| **Utility** |  | `/api/base64/decode` |

Each entity supports the following operations where available: **load**, **list**, **create**,
**update**, and **remove**.


## Architecture

### Entity-operation model

Every SDK call follows the same pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

At each stage a feature hook fires (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), allowing features to inspect or modify the pipeline.

### Features

Features are hook-based middleware that extend SDK behaviour.

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

You can add custom features by passing them in the `extend` option at
construction time.

### Direct and Prepare

For endpoints not covered by the entity model, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`, `headers`,
and `body`.


## Quick start

### Golang

```go
import sdk "github.com/voxgig-sdk/developer-toolbox-sdk/go"

client := sdk.NewDeveloperToolboxSDK(map[string]any{
    "apikey": os.Getenv("DEVELOPER-TOOLBOX_APIKEY"),
})

// List all generators
generators, err := client.Generator(nil).List(nil, nil)
```

### Lua

```lua
local sdk = require("developer-toolbox_sdk")

local client = sdk.new({
  apikey = os.getenv("DEVELOPER-TOOLBOX_APIKEY"),
})

-- List all generators
local generators, err = client:Generator(nil):list(nil, nil)

-- Load a specific generator
local generator, err = client:Generator(nil):load(
  { id = "example_id" }, nil
)
```

### PHP

```php
<?php
require_once 'developertoolbox_sdk.php';

$client = new DeveloperToolboxSDK([
    "apikey" => getenv("DEVELOPER-TOOLBOX_APIKEY"),
]);

// List all generators
[$generators, $err] = $client->Generator(null)->list(null, null);

// Load a specific generator
[$generator, $err] = $client->Generator(null)->load(
    ["id" => "example_id"], null
);
```

### Python

```python
import os
from developertoolbox_sdk import DeveloperToolboxSDK

client = DeveloperToolboxSDK({
    "apikey": os.environ.get("DEVELOPER-TOOLBOX_APIKEY"),
})

# List all generators
generators, err = client.Generator(None).list(None, None)

# Load a specific generator
generator, err = client.Generator(None).load(
    {"id": "example_id"}, None
)
```

### Ruby

```ruby
require_relative "DeveloperToolbox_sdk"

client = DeveloperToolboxSDK.new({
  "apikey" => ENV["DEVELOPER-TOOLBOX_APIKEY"],
})

# List all generators
generators, err = client.Generator(nil).list(nil, nil)

# Load a specific generator
generator, err = client.Generator(nil).load(
  { "id" => "example_id" }, nil
)
```

### TypeScript

```ts
import { DeveloperToolboxSDK } from 'developer-toolbox'

const client = new DeveloperToolboxSDK({
  apikey: process.env.DEVELOPER-TOOLBOX_APIKEY,
})

// List all generators
const generators = await client.Generator().list()
```


## Testing

Both SDKs provide a test mode that replaces the HTTP transport with an
in-memory mock, so tests run without a network connection.

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Generator(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Generator(nil):load(
  { id = "test01" }, nil
)
```

### PHP

```php
$client = DeveloperToolboxSDK::test(null, null);
[$result, $err] = $client->Generator(null)->load(
    ["id" => "test01"], null
);
```

### Python

```python
client = DeveloperToolboxSDK.test(None, None)
result, err = client.Generator(None).load(
    {"id": "test01"}, None
)
```

### Ruby

```ruby
client = DeveloperToolboxSDK.test(nil, nil)
result, err = client.Generator(nil).load(
  { "id" => "test01" }, nil
)
```

### TypeScript

```ts
const client = DeveloperToolboxSDK.test()
const result = await client.Generator().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```


## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```


## Language-specific documentation

- [Golang SDK](go/README.md)
- [Go CLI SDK](go-cli/README.md)
- [Lua SDK](lua/README.md)
- [PHP SDK](php/README.md)
- [Python SDK](py/README.md)
- [Ruby SDK](rb/README.md)
- [TypeScript SDK](ts/README.md)


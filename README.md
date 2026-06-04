# DeveloperToolbox SDK

Free REST utilities for developers: UUIDs, passwords, fake data, time, IP lookup and more, with no signup

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Developer Toolbox API

Developer Toolbox is a free REST API that bundles small developer utilities behind a single host. It is documented on the community catalogue [freepublicapis.com](https://freepublicapis.com/developer-toolbox-api) and served from `https://conway-toolbox-production.up.railway.app`.

What you get from the API:

- `/uuid` — generate a random UUID v4
- `/uuid/5` — batch UUID generation (five at a time)
- `/pw` — create a secure random password
- `/fake/person` — synthetic person record (name, email, address, company)
- `/time` — current time in ISO and Unix form, with ten major timezones
- `/ip` — caller's public IP address with details

Operational notes: no authentication is required and the free tier allows up to 120 requests per minute. CORS is disabled on the documented endpoints, so server-side or proxied calls are the supported path. Catalogue checks at the time of writing reported the upstream host as unreachable, so the SDK shape here may outlast the live service.

## Try it

**TypeScript**
```bash
npm install developer-toolbox
```

**Python**
```bash
pip install developer-toolbox-sdk
```

**PHP**
```bash
composer require voxgig/developer-toolbox-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/developer-toolbox-sdk/go
```

**Ruby**
```bash
gem install developer-toolbox-sdk
```

**Lua**
```bash
luarocks install developer-toolbox-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { DeveloperToolboxSDK } from 'developer-toolbox'

const client = new DeveloperToolboxSDK({})

// List all generators
const generators = await client.Generator().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o developer-toolbox-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "developer-toolbox": {
      "command": "/abs/path/to/developer-toolbox-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Generator** | Generator endpoints that produce fresh values on demand, such as UUIDs (`/uuid`, `/uuid/5`), random passwords (`/pw`) and fake person records (`/fake/person`). | `/api/qrcode` |
| **UrlTool** | URL-oriented helpers; the catalogue advertises a URL shortener alongside the other utilities, though no specific path is documented in the public summary. | `/api/url/shorten` |
| **Utility** | Miscellaneous developer utilities including current time across timezones (`/time`) and caller IP lookup (`/ip`). | `/api/base64/decode` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from developertoolbox_sdk import DeveloperToolboxSDK

client = DeveloperToolboxSDK({})

# List all generators
generators, err = client.Generator(None).list(None, None)

# Load a specific generator
generator, err = client.Generator(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'developertoolbox_sdk.php';

$client = new DeveloperToolboxSDK([]);

// List all generators
[$generators, $err] = $client->Generator(null)->list(null, null);

// Load a specific generator
[$generator, $err] = $client->Generator(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/developer-toolbox-sdk/go"

client := sdk.NewDeveloperToolboxSDK(map[string]any{})

// List all generators
generators, err := client.Generator(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "DeveloperToolbox_sdk"

client = DeveloperToolboxSDK.new({})

# List all generators
generators, err = client.Generator(nil).list(nil, nil)

# Load a specific generator
generator, err = client.Generator(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("developer-toolbox_sdk")

local client = sdk.new({})

-- List all generators
local generators, err = client:Generator(nil):list(nil, nil)

-- Load a specific generator
local generator, err = client:Generator(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = DeveloperToolboxSDK.test()
const result = await client.Generator().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = DeveloperToolboxSDK.test(None, None)
result, err = client.Generator(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = DeveloperToolboxSDK::test(null, null);
[$result, $err] = $client->Generator(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Generator(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = DeveloperToolboxSDK.test(nil, nil)
result, err = client.Generator(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Generator(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
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

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
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

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Developer Toolbox API

- Upstream: [https://conway-toolbox-production.up.railway.app](https://conway-toolbox-production.up.railway.app)
- API docs: [https://freepublicapis.com/developer-toolbox-api](https://freepublicapis.com/developer-toolbox-api)

- No explicit license is published for the Developer Toolbox API.
- The service is offered as a free public API with no signup required.
- Free tier is rate-limited to 120 requests per minute.
- Endpoints are documented as having CORS disabled, so browser-side calls may need a proxy.

---

Generated from the Developer Toolbox API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

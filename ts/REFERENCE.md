# DeveloperToolbox TypeScript SDK Reference

Complete API reference for the DeveloperToolbox TypeScript SDK.


## DeveloperToolboxSDK

### Constructor

```ts
new DeveloperToolboxSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DeveloperToolboxSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = DeveloperToolboxSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `DeveloperToolboxSDK` instance in test mode.


### Instance Methods

#### `Generator(data?: object)`

Create a new `Generator` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeneratorEntity` instance.

#### `UrlTool(data?: object)`

Create a new `UrlTool` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UrlToolEntity` instance.

#### `Utility(data?: object)`

Create a new `Utility` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UtilityEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `DeveloperToolboxSDK.test()`.

**Returns:** `DeveloperToolboxSDK` instance in test mode.


---

## GeneratorEntity

```ts
const generator = client.Generator()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `string` | Yes | Text or URL to encode in QR code |
| `password` | `string` | No |  |
| `size` | `number` | No | Size of QR code in pixels |
| `uuids` | `any[]` | No |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `data` | - | Yes | - |
| `password` | - | - | - |
| `size` | - | - | - |
| `uuids` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Generator().create({
  data: 'example_data',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Generator().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Generator().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeneratorEntity` instance with the same client and
options.

#### `client()`

Return the parent `DeveloperToolboxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UrlToolEntity

```ts
const url_tool = client.UrlTool()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customAlias` | `string` | No | Custom alias for shortened URL |
| `originalUrl` | `string` | No |  |
| `shortUrl` | `string` | No |  |
| `url` | `string` | Yes | URL to shorten |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UrlTool().create({
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UrlToolEntity` instance with the same client and
options.

#### `client()`

Return the parent `DeveloperToolboxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UtilityEntity

```ts
const utility = client.Utility()
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
| `header` | `Record<string, any>` | No |  |
| `indent` | `number` | No | Number of spaces for indentation |
| `isMatch` | `boolean` | No |  |
| `json` | `string` | Yes | JSON string to format |
| `matches` | `any[]` | No |  |
| `pattern` | `string` | Yes | Regular expression pattern |
| `payload` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Utility().create({
  encoded: 'example_encoded',
  json: 'example_json',
  pattern: 'example_pattern',
  text: 'example_text',
  token: 'example_token',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UtilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `DeveloperToolboxSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new DeveloperToolboxSDK({
  feature: {
    test: { active: true },
  }
})
```


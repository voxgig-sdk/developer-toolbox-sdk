# DeveloperToolbox Python SDK Reference

Complete API reference for the DeveloperToolbox Python SDK.


## DeveloperToolboxSDK

### Constructor

```python
from developer-toolbox_sdk import DeveloperToolboxSDK

client = DeveloperToolboxSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DeveloperToolboxSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = DeveloperToolboxSDK.test()
```


### Instance Methods

#### `Generator(data=None)`

Create a new `GeneratorEntity` instance. Pass `None` for no initial data.

#### `UrlTool(data=None)`

Create a new `UrlToolEntity` instance. Pass `None` for no initial data.

#### `Utility(data=None)`

Create a new `UtilityEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## GeneratorEntity

```python
generator = client.Generator()
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

#### `create(reqdata, ctrl=None) -> tuple`

Create a new entity with the given data.

```python
result, err = client.Generator().create({
    "data": # `$STRING`,
})
```

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Generator().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Generator().load({"id": "generator_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeneratorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UrlToolEntity

```python
url_tool = client.UrlTool()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_alia` | ``$STRING`` | No |  |
| `original_url` | ``$STRING`` | No |  |
| `short_url` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> tuple`

Create a new entity with the given data.

```python
result, err = client.UrlTool().create({
    "url": # `$STRING`,
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UrlToolEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UtilityEntity

```python
utility = client.Utility()
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

#### `create(reqdata, ctrl=None) -> tuple`

Create a new entity with the given data.

```python
result, err = client.Utility().create({
    "encoded": # `$STRING`,
    "json": # `$STRING`,
    "pattern": # `$STRING`,
    "text": # `$STRING`,
    "token": # `$STRING`,
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UtilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = DeveloperToolboxSDK({
    "feature": {
        "test": {"active": True},
    },
})
```


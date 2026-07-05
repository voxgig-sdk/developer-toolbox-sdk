# DeveloperToolbox Python SDK Reference

Complete API reference for the DeveloperToolbox Python SDK.


## DeveloperToolboxSDK

### Constructor

```python
from developertoolbox_sdk import DeveloperToolboxSDK

client = DeveloperToolboxSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
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

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## GeneratorEntity

```python
generator = client.Generator()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `str` | Yes |  |
| `password` | `str` | No |  |
| `size` | `int` | No |  |
| `uuid` | `list` | No |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `data` | - | Yes | - |
| `password` | - | - | - |
| `size` | - | - | - |
| `uuid` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Generator().create({
    "data": "example",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Generator().list()
for generator in results:
    print(generator)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Generator().load()
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
| `custom_alia` | `str` | No |  |
| `original_url` | `str` | No |  |
| `short_url` | `str` | No |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UrlTool().create({
    "url": "example",  # str
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
| `algorithm` | `str` | No |  |
| `decoded` | `str` | No |  |
| `encoded` | `str` | Yes |  |
| `error` | `str` | No |  |
| `flag` | `str` | No |  |
| `formatted` | `str` | No |  |
| `hash` | `str` | No |  |
| `header` | `dict` | No |  |
| `indent` | `int` | No |  |
| `is_match` | `bool` | No |  |
| `json` | `str` | Yes |  |
| `match` | `list` | No |  |
| `parsed` | `dict` | No |  |
| `pattern` | `str` | Yes |  |
| `payload` | `dict` | No |  |
| `signature` | `str` | No |  |
| `text` | `str` | Yes |  |
| `token` | `str` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Utility().create({
    "encoded": "example",  # str
    "json": "example",  # str
    "pattern": "example",  # str
    "text": "example",  # str
    "token": "example",  # str
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


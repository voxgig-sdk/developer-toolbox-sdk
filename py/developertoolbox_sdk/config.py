# DeveloperToolbox SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "DeveloperToolbox",
            "slug": "developer-toolbox",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://conway-toolbox-production.up.railway.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "generator": {},
                "url_tool": {},
                "utility": {},
            },
        },
        "entity": {
      "generator": {
        "fields": [
          {
            "name": "data",
            "op": {
              "list": {
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "short": "Text or URL to encode in QR code",
            "type": "`$STRING`",
          },
          {
            "name": "password",
            "type": "`$STRING`",
          },
          {
            "name": "size",
            "short": "Size of QR code in pixels",
            "type": "`$INTEGER`",
          },
          {
            "name": "uuids",
            "type": "`$ARRAY`",
          },
        ],
        "name": "generator",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/qrcode",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "qrcode",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "qrcode",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "user",
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/fake-data",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "fake-data",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "api",
                  "fake-data",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/uuid",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "uuid",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.uuids`",
                },
                "parts": [
                  "api",
                  "uuid",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 16,
                      "kind": "query",
                      "name": "length",
                      "orig": "length",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": True,
                      "kind": "query",
                      "name": "lowercase",
                      "orig": "lowercase",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": True,
                      "kind": "query",
                      "name": "number",
                      "orig": "number",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": True,
                      "kind": "query",
                      "name": "symbol",
                      "orig": "symbol",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": True,
                      "kind": "query",
                      "name": "uppercase",
                      "orig": "uppercase",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/password",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "password",
                  },
                ],
                "select": {
                  "exist": [
                    "length",
                    "lowercase",
                    "number",
                    "symbol",
                    "uppercase",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "password",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "url_tool": {
        "fields": [
          {
            "name": "customAlias",
            "short": "Custom alias for shortened URL",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "originalUrl",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "shortUrl",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "req": True,
            "short": "URL to shorten",
            "type": "`$STRING`",
          },
        ],
        "name": "url_tool",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/url/shorten",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "url",
                  },
                  {
                    "lit": "shorten",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "url",
                  "shorten",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "utility": {
        "fields": [
          {
            "name": "algorithm",
            "short": "Hashing algorithm to use",
            "type": "`$STRING`",
          },
          {
            "name": "decoded",
            "type": "`$STRING`",
          },
          {
            "name": "encoded",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "Base64 encoded text to decode",
            "type": "`$STRING`",
          },
          {
            "name": "flags",
            "short": "Regex flags (g, i, m, s, u, y)",
            "type": "`$STRING`",
          },
          {
            "name": "formatted",
            "type": "`$STRING`",
          },
          {
            "name": "hash",
            "type": "`$STRING`",
          },
          {
            "name": "header",
            "type": "`$OBJECT`",
          },
          {
            "name": "indent",
            "short": "Number of spaces for indentation",
            "type": "`$INTEGER`",
          },
          {
            "name": "isMatch",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "json",
            "req": True,
            "short": "JSON string to format",
            "type": "`$STRING`",
          },
          {
            "name": "matches",
            "type": "`$ARRAY`",
          },
          {
            "name": "pattern",
            "req": True,
            "short": "Regular expression pattern",
            "type": "`$STRING`",
          },
          {
            "name": "payload",
            "type": "`$OBJECT`",
          },
          {
            "name": "signature",
            "type": "`$STRING`",
          },
          {
            "name": "text",
            "req": True,
            "short": "Text to encode",
            "type": "`$STRING`",
          },
          {
            "name": "token",
            "req": True,
            "short": "JWT token to decode",
            "type": "`$STRING`",
          },
        ],
        "name": "utility",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/base64/decode",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "base64",
                  },
                  {
                    "lit": "decode",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "base64",
                  "decode",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/base64/encode",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "base64",
                  },
                  {
                    "lit": "encode",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "base64",
                  "encode",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/hash",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "hash",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "hash",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/json/format",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "json",
                  },
                  {
                    "lit": "format",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "json",
                  "format",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/json/validate",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "json",
                  },
                  {
                    "lit": "validate",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.parsed`",
                },
                "parts": [
                  "api",
                  "json",
                  "validate",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/jwt/decode",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "jwt",
                  },
                  {
                    "lit": "decode",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "jwt",
                  "decode",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/regex/test",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "regex",
                  },
                  {
                    "lit": "test",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "regex",
                  "test",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

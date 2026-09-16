
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'DeveloperToolbox',
        slug: "developer-toolbox",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://conway-toolbox-production.up.railway.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      generator: {
      },

      url_tool: {
      },

      utility: {
      },

    }
  }


  entity = {
    "generator": {
      "fields": [
        {
          "name": "data",
          "op": {
            "list": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "Text or URL to encode in QR code",
          "type": "`$STRING`"
        },
        {
          "name": "password",
          "type": "`$STRING`"
        },
        {
          "name": "size",
          "short": "Size of QR code in pixels",
          "type": "`$INTEGER`"
        },
        {
          "name": "uuids",
          "type": "`$ARRAY`"
        }
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
                  "lit": "api"
                },
                {
                  "lit": "qrcode"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "qrcode"
              ]
            }
          ]
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "user",
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/fake-data",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "fake-data"
                }
              ],
              "select": {
                "exist": [
                  "count",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "api",
                "fake-data"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "count",
                    "orig": "count",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/uuid",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "uuid"
                }
              ],
              "select": {
                "exist": [
                  "count"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.uuids`"
              },
              "parts": [
                "api",
                "uuid"
              ]
            }
          ]
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "lowercase",
                    "orig": "lowercase",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "number",
                    "orig": "number",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "symbol",
                    "orig": "symbol",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "uppercase",
                    "orig": "uppercase",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/password",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "password"
                }
              ],
              "select": {
                "exist": [
                  "length",
                  "lowercase",
                  "number",
                  "symbol",
                  "uppercase"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "password"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "url_tool": {
      "fields": [
        {
          "name": "customAlias",
          "short": "Custom alias for shortened URL",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "originalUrl",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "shortUrl",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "url",
          "req": true,
          "short": "URL to shorten",
          "type": "`$STRING`"
        }
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
                  "lit": "api"
                },
                {
                  "lit": "url"
                },
                {
                  "lit": "shorten"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "url",
                "shorten"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "utility": {
      "fields": [
        {
          "name": "algorithm",
          "short": "Hashing algorithm to use",
          "type": "`$STRING`"
        },
        {
          "name": "decoded",
          "type": "`$STRING`"
        },
        {
          "name": "encoded",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Base64 encoded text to decode",
          "type": "`$STRING`"
        },
        {
          "name": "flags",
          "short": "Regex flags (g, i, m, s, u, y)",
          "type": "`$STRING`"
        },
        {
          "name": "formatted",
          "type": "`$STRING`"
        },
        {
          "name": "hash",
          "type": "`$STRING`"
        },
        {
          "name": "header",
          "type": "`$OBJECT`"
        },
        {
          "name": "indent",
          "short": "Number of spaces for indentation",
          "type": "`$INTEGER`"
        },
        {
          "name": "isMatch",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "json",
          "req": true,
          "short": "JSON string to format",
          "type": "`$STRING`"
        },
        {
          "name": "matches",
          "type": "`$ARRAY`"
        },
        {
          "name": "pattern",
          "req": true,
          "short": "Regular expression pattern",
          "type": "`$STRING`"
        },
        {
          "name": "payload",
          "type": "`$OBJECT`"
        },
        {
          "name": "signature",
          "type": "`$STRING`"
        },
        {
          "name": "text",
          "req": true,
          "short": "Text to encode",
          "type": "`$STRING`"
        },
        {
          "name": "token",
          "req": true,
          "short": "JWT token to decode",
          "type": "`$STRING`"
        }
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
                  "lit": "api"
                },
                {
                  "lit": "base64"
                },
                {
                  "lit": "decode"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "base64",
                "decode"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/base64/encode",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "base64"
                },
                {
                  "lit": "encode"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "base64",
                "encode"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/hash",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "hash"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "hash"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/json/format",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "json"
                },
                {
                  "lit": "format"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "json",
                "format"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/json/validate",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "json"
                },
                {
                  "lit": "validate"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.parsed`"
              },
              "parts": [
                "api",
                "json",
                "validate"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/jwt/decode",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "jwt"
                },
                {
                  "lit": "decode"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "jwt",
                "decode"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/regex/test",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "regex"
                },
                {
                  "lit": "test"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "regex",
                "test"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}


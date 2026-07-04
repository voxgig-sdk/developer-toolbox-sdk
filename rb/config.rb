# DeveloperToolbox SDK configuration

module DeveloperToolboxConfig
  def self.make_config
    {
      "main" => {
        "name" => "DeveloperToolbox",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://conway-toolbox-production.up.railway.app",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "generator" => {},
          "url_tool" => {},
          "utility" => {},
        },
      },
      "entity" => {
        "generator" => {
          "fields" => [
            {
              "active" => true,
              "name" => "data",
              "op" => {
                "list" => {
                  "req" => false,
                  "type" => "`$ARRAY`",
                },
              },
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "password",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "size",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "uuid",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 3,
            },
          ],
          "name" => "generator",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/qrcode",
                  "parts" => [
                    "api",
                    "qrcode",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "create",
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => 1,
                        "kind" => "query",
                        "name" => "count",
                        "orig" => "count",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "example" => "user",
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api/fake-data",
                  "parts" => [
                    "api",
                    "fake-data",
                  ],
                  "select" => {
                    "exist" => [
                      "count",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => 1,
                        "kind" => "query",
                        "name" => "count",
                        "orig" => "count",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api/uuid",
                  "parts" => [
                    "api",
                    "uuid",
                  ],
                  "select" => {
                    "exist" => [
                      "count",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
              ],
              "key$" => "list",
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => 16,
                        "kind" => "query",
                        "name" => "length",
                        "orig" => "length",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "example" => true,
                        "kind" => "query",
                        "name" => "lowercase",
                        "orig" => "lowercase",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "active" => true,
                        "example" => true,
                        "kind" => "query",
                        "name" => "number",
                        "orig" => "number",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "active" => true,
                        "example" => true,
                        "kind" => "query",
                        "name" => "symbol",
                        "orig" => "symbol",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "active" => true,
                        "example" => true,
                        "kind" => "query",
                        "name" => "uppercase",
                        "orig" => "uppercase",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api/password",
                  "parts" => [
                    "api",
                    "password",
                  ],
                  "select" => {
                    "exist" => [
                      "length",
                      "lowercase",
                      "number",
                      "symbol",
                      "uppercase",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "url_tool" => {
          "fields" => [
            {
              "active" => true,
              "name" => "custom_alia",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "original_url",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "short_url",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "url",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 3,
            },
          ],
          "name" => "url_tool",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/url/shorten",
                  "parts" => [
                    "api",
                    "url",
                    "shorten",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "create",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "utility" => {
          "fields" => [
            {
              "active" => true,
              "name" => "algorithm",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "decoded",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "encoded",
              "op" => {
                "create" => {
                  "req" => false,
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "error",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "flag",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "formatted",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "hash",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "header",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "indent",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "is_match",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "json",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 10,
            },
            {
              "active" => true,
              "name" => "match",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 11,
            },
            {
              "active" => true,
              "name" => "parsed",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 12,
            },
            {
              "active" => true,
              "name" => "pattern",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 13,
            },
            {
              "active" => true,
              "name" => "payload",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 14,
            },
            {
              "active" => true,
              "name" => "signature",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 15,
            },
            {
              "active" => true,
              "name" => "text",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 16,
            },
            {
              "active" => true,
              "name" => "token",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 17,
            },
            {
              "active" => true,
              "name" => "valid",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 18,
            },
          ],
          "name" => "utility",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/base64/decode",
                  "parts" => [
                    "api",
                    "base64",
                    "decode",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/base64/encode",
                  "parts" => [
                    "api",
                    "base64",
                    "encode",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/hash",
                  "parts" => [
                    "api",
                    "hash",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 2,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/json/format",
                  "parts" => [
                    "api",
                    "json",
                    "format",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 3,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/json/validate",
                  "parts" => [
                    "api",
                    "json",
                    "validate",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 4,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/jwt/decode",
                  "parts" => [
                    "api",
                    "jwt",
                    "decode",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 5,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/regex/test",
                  "parts" => [
                    "api",
                    "regex",
                    "test",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 6,
                },
              ],
              "key$" => "create",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    DeveloperToolboxFeatures.make_feature(name)
  end
end

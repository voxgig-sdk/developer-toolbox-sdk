# DeveloperToolbox SDK configuration

module DeveloperToolboxConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
              "name" => "data",
              "op" => {
                "list" => {
                  "type" => "`$ARRAY`",
                },
              },
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "password",
              "type" => "`$STRING`",
            },
            {
              "name" => "size",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "uuids",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "generator",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
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
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "count",
                        "orig" => "count",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "user",
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "count",
                        "orig" => "count",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                    "res" => "`body.uuids`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 16,
                        "kind" => "query",
                        "name" => "length",
                        "orig" => "length",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "lowercase",
                        "orig" => "lowercase",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "number",
                        "orig" => "number",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "symbol",
                        "orig" => "symbol",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "uppercase",
                        "orig" => "uppercase",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "url_tool" => {
          "fields" => [
            {
              "name" => "customAlias",
              "type" => "`$STRING`",
            },
            {
              "name" => "originalUrl",
              "type" => "`$STRING`",
            },
            {
              "name" => "shortUrl",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "req" => true,
              "type" => "`$STRING`",
            },
          ],
          "name" => "url_tool",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "utility" => {
          "fields" => [
            {
              "name" => "algorithm",
              "type" => "`$STRING`",
            },
            {
              "name" => "decoded",
              "type" => "`$STRING`",
            },
            {
              "name" => "encoded",
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "flags",
              "type" => "`$STRING`",
            },
            {
              "name" => "formatted",
              "type" => "`$STRING`",
            },
            {
              "name" => "hash",
              "type" => "`$STRING`",
            },
            {
              "name" => "header",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "indent",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "isMatch",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "json",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "matches",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pattern",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "payload",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "signature",
              "type" => "`$STRING`",
            },
            {
              "name" => "text",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "token",
              "req" => true,
              "type" => "`$STRING`",
            },
          ],
          "name" => "utility",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                    "res" => "`body.parsed`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
              ],
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

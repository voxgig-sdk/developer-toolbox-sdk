package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DeveloperToolbox",
			"slug": "developer-toolbox",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://conway-toolbox-production.up.railway.app",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"generator": map[string]any{},
				"url_tool": map[string]any{},
				"utility": map[string]any{},
			},
		},
		"entity": map[string]any{
			"generator": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "Text or URL to encode in QR code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "password",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size",
						"short": "Size of QR code in pixels",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "uuids",
						"type": "`$ARRAY`",
					},
				},
				"name": "generator",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/qrcode",
								"parts": []any{
									"api",
									"qrcode",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "user",
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/fake-data",
								"parts": []any{
									"api",
									"fake-data",
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/uuid",
								"parts": []any{
									"api",
									"uuid",
								},
								"select": map[string]any{
									"exist": []any{
										"count",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.uuids`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 16,
											"kind": "query",
											"name": "length",
											"orig": "length",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "lowercase",
											"orig": "lowercase",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "number",
											"orig": "number",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "symbol",
											"orig": "symbol",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "uppercase",
											"orig": "uppercase",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/password",
								"parts": []any{
									"api",
									"password",
								},
								"select": map[string]any{
									"exist": []any{
										"length",
										"lowercase",
										"number",
										"symbol",
										"uppercase",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"url_tool": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "customAlias",
						"short": "Custom alias for shortened URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "originalUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shortUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "URL to shorten",
						"type": "`$STRING`",
					},
				},
				"name": "url_tool",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/url/shorten",
								"parts": []any{
									"api",
									"url",
									"shorten",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"utility": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "algorithm",
						"short": "Hashing algorithm to use",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "decoded",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "encoded",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Base64 encoded text to decode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "flags",
						"short": "Regex flags (g, i, m, s, u, y)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "formatted",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "header",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "indent",
						"short": "Number of spaces for indentation",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "isMatch",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "json",
						"req": true,
						"short": "JSON string to format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "matches",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pattern",
						"req": true,
						"short": "Regular expression pattern",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payload",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "signature",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "text",
						"req": true,
						"short": "Text to encode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "token",
						"req": true,
						"short": "JWT token to decode",
						"type": "`$STRING`",
					},
				},
				"name": "utility",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/base64/decode",
								"parts": []any{
									"api",
									"base64",
									"decode",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/base64/encode",
								"parts": []any{
									"api",
									"base64",
									"encode",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/hash",
								"parts": []any{
									"api",
									"hash",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/json/format",
								"parts": []any{
									"api",
									"json",
									"format",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/json/validate",
								"parts": []any{
									"api",
									"json",
									"validate",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.parsed`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/jwt/decode",
								"parts": []any{
									"api",
									"jwt",
									"decode",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/regex/test",
								"parts": []any{
									"api",
									"regex",
									"test",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

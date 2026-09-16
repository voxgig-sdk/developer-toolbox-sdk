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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "qrcode",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"qrcode",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "fake-data",
									},
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
								"parts": []any{
									"api",
									"fake-data",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "uuid",
									},
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
								"parts": []any{
									"api",
									"uuid",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "password",
									},
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
								"parts": []any{
									"api",
									"password",
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
						"format": "uri",
						"name": "originalUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "shortUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "url",
									},
									map[string]any{
										"lit": "shorten",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"url",
									"shorten",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "base64",
									},
									map[string]any{
										"lit": "decode",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"base64",
									"decode",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/base64/encode",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "base64",
									},
									map[string]any{
										"lit": "encode",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"base64",
									"encode",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/hash",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "hash",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"hash",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/json/format",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "json",
									},
									map[string]any{
										"lit": "format",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"json",
									"format",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/json/validate",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "json",
									},
									map[string]any{
										"lit": "validate",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.parsed`",
								},
								"parts": []any{
									"api",
									"json",
									"validate",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/jwt/decode",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "jwt",
									},
									map[string]any{
										"lit": "decode",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"jwt",
									"decode",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/regex/test",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "regex",
									},
									map[string]any{
										"lit": "test",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"regex",
									"test",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

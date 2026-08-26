<?php
declare(strict_types=1);

// DeveloperToolbox SDK configuration

class DeveloperToolboxConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "DeveloperToolbox",
                "slug" => "developer-toolbox",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://conway-toolbox-production.up.railway.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "generator" => [],
                    "url_tool" => [],
                    "utility" => [],
                ],
            ],
            "entity" => [
        'generator' => [
          'fields' => [
            [
              'name' => 'data',
              'op' => [
                'list' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'short' => 'Text or URL to encode in QR code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'password',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'size',
              'short' => 'Size of QR code in pixels',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'uuids',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'generator',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/qrcode',
                  'parts' => [
                    'api',
                    'qrcode',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'count',
                        'orig' => 'count',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'user',
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/fake-data',
                  'parts' => [
                    'api',
                    'fake-data',
                  ],
                  'select' => [
                    'exist' => [
                      'count',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'count',
                        'orig' => 'count',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/uuid',
                  'parts' => [
                    'api',
                    'uuid',
                  ],
                  'select' => [
                    'exist' => [
                      'count',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.uuids`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 16,
                        'kind' => 'query',
                        'name' => 'length',
                        'orig' => 'length',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'lowercase',
                        'orig' => 'lowercase',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'number',
                        'orig' => 'number',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'symbol',
                        'orig' => 'symbol',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'uppercase',
                        'orig' => 'uppercase',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/password',
                  'parts' => [
                    'api',
                    'password',
                  ],
                  'select' => [
                    'exist' => [
                      'length',
                      'lowercase',
                      'number',
                      'symbol',
                      'uppercase',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'url_tool' => [
          'fields' => [
            [
              'name' => 'customAlias',
              'short' => 'Custom alias for shortened URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'originalUrl',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'shortUrl',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'short' => 'URL to shorten',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'url_tool',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/url/shorten',
                  'parts' => [
                    'api',
                    'url',
                    'shorten',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'utility' => [
          'fields' => [
            [
              'name' => 'algorithm',
              'short' => 'Hashing algorithm to use',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'decoded',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'encoded',
              'op' => [
                'create' => [
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'short' => 'Base64 encoded text to decode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'flags',
              'short' => 'Regex flags (g, i, m, s, u, y)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'formatted',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'hash',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'header',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'indent',
              'short' => 'Number of spaces for indentation',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'isMatch',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'json',
              'req' => true,
              'short' => 'JSON string to format',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'matches',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pattern',
              'req' => true,
              'short' => 'Regular expression pattern',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'payload',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'signature',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'text',
              'req' => true,
              'short' => 'Text to encode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'token',
              'req' => true,
              'short' => 'JWT token to decode',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'utility',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/base64/decode',
                  'parts' => [
                    'api',
                    'base64',
                    'decode',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/base64/encode',
                  'parts' => [
                    'api',
                    'base64',
                    'encode',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/hash',
                  'parts' => [
                    'api',
                    'hash',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/json/format',
                  'parts' => [
                    'api',
                    'json',
                    'format',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/json/validate',
                  'parts' => [
                    'api',
                    'json',
                    'validate',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.parsed`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/jwt/decode',
                  'parts' => [
                    'api',
                    'jwt',
                    'decode',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/regex/test',
                  'parts' => [
                    'api',
                    'regex',
                    'test',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return DeveloperToolboxFeatures::make_feature($name);
    }
}

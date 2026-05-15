<?php
declare(strict_types=1);

// DeveloperToolbox SDK configuration

class DeveloperToolboxConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "DeveloperToolbox",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://conway-toolbox-production.up.railway.app",
                "auth" => [
                    "prefix" => "Bearer",
                ],
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
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'password',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'size',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'uuid',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 3,
            ],
          ],
          'name' => 'generator',
          'op' => [
            'create' => [
              'name' => 'create',
              'points' => [
                [
                  'method' => 'POST',
                  'orig' => '/api/qrcode',
                  'parts' => [
                    'api',
                    'qrcode',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'create',
            ],
            'list' => [
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
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => 'user',
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'count',
                        'orig' => 'count',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 1,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
            'load' => [
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
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'lowercase',
                        'orig' => 'lowercase',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'number',
                        'orig' => 'number',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'symbol',
                        'orig' => 'symbol',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'uppercase',
                        'orig' => 'uppercase',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'url_tool' => [
          'fields' => [
            [
              'name' => 'custom_alia',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'original_url',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'short_url',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'url',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
          ],
          'name' => 'url_tool',
          'op' => [
            'create' => [
              'name' => 'create',
              'points' => [
                [
                  'method' => 'POST',
                  'orig' => '/api/url/shorten',
                  'parts' => [
                    'api',
                    'url',
                    'shorten',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'create',
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
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'decoded',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'encoded',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'error',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'flag',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'formatted',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'hash',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'header',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'indent',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'is_match',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'json',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'match',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'parsed',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'pattern',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'payload',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'signature',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'text',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 16,
            ],
            [
              'name' => 'token',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 17,
            ],
            [
              'name' => 'valid',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 18,
            ],
          ],
          'name' => 'utility',
          'op' => [
            'create' => [
              'name' => 'create',
              'points' => [
                [
                  'method' => 'POST',
                  'orig' => '/api/base64/decode',
                  'parts' => [
                    'api',
                    'base64',
                    'decode',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/base64/encode',
                  'parts' => [
                    'api',
                    'base64',
                    'encode',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 1,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/hash',
                  'parts' => [
                    'api',
                    'hash',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 2,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/json/format',
                  'parts' => [
                    'api',
                    'json',
                    'format',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 3,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/json/validate',
                  'parts' => [
                    'api',
                    'json',
                    'validate',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 4,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/jwt/decode',
                  'parts' => [
                    'api',
                    'jwt',
                    'decode',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 5,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/regex/test',
                  'parts' => [
                    'api',
                    'regex',
                    'test',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 6,
                ],
              ],
              'input' => 'data',
              'key$' => 'create',
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

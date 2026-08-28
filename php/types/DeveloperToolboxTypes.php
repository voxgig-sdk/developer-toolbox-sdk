<?php
declare(strict_types=1);

// Typed models for the DeveloperToolbox SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Generator entity data model. */
class Generator
{
    public string $data;
    public ?string $password = null;
    public ?int $size = null;
    public ?array $uuids = null;
}

/** Request payload for Generator#load. */
class GeneratorLoadMatch
{
    public ?int $length = null;
    public ?bool $lowercase = null;
    public ?bool $number = null;
    public ?bool $symbol = null;
    public ?bool $uppercase = null;
}

/** Request payload for Generator#list. */
class GeneratorListMatch
{
    public ?int $count = null;
    public ?string $type = null;
}

/** Request payload for Generator#create. */
class GeneratorCreateData
{
    public string $data;
    public ?string $password = null;
    public ?int $size = null;
    public ?array $uuids = null;
}

/** UrlTool entity data model. */
class UrlTool
{
    public ?string $customAlias = null;
    public ?string $originalUrl = null;
    public ?string $shortUrl = null;
    public string $url;
}

/** Request payload for UrlTool#create. */
class UrlToolCreateData
{
    public ?string $customAlias = null;
    public ?string $originalUrl = null;
    public ?string $shortUrl = null;
    public string $url;
}

/** Utility entity data model. */
class Utility
{
    public ?string $algorithm = null;
    public ?string $decoded = null;
    public string $encoded;
    public ?string $flags = null;
    public ?string $formatted = null;
    public ?string $hash = null;
    public ?array $header = null;
    public ?int $indent = null;
    public ?bool $isMatch = null;
    public string $json;
    public ?array $matches = null;
    public string $pattern;
    public ?array $payload = null;
    public ?string $signature = null;
    public string $text;
    public string $token;
}

/** Request payload for Utility#create. */
class UtilityCreateData
{
    public ?string $algorithm = null;
    public ?string $decoded = null;
    public string $encoded;
    public ?string $flags = null;
    public ?string $formatted = null;
    public ?string $hash = null;
    public ?array $header = null;
    public ?int $indent = null;
    public ?bool $isMatch = null;
    public string $json;
    public ?array $matches = null;
    public string $pattern;
    public ?array $payload = null;
    public ?string $signature = null;
    public string $text;
    public string $token;
}


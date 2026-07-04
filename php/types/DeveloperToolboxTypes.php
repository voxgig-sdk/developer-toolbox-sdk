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
    public ?array $uuid = null;
}

/** Match filter for Generator#load (any subset of Generator fields). */
class GeneratorLoadMatch
{
    public ?string $data = null;
    public ?string $password = null;
    public ?int $size = null;
    public ?array $uuid = null;
}

/** Match filter for Generator#list (any subset of Generator fields). */
class GeneratorListMatch
{
    public ?string $data = null;
    public ?string $password = null;
    public ?int $size = null;
    public ?array $uuid = null;
}

/** Match filter for Generator#create (any subset of Generator fields). */
class GeneratorCreateData
{
    public ?string $data = null;
    public ?string $password = null;
    public ?int $size = null;
    public ?array $uuid = null;
}

/** UrlTool entity data model. */
class UrlTool
{
    public ?string $custom_alia = null;
    public ?string $original_url = null;
    public ?string $short_url = null;
    public string $url;
}

/** Match filter for UrlTool#create (any subset of UrlTool fields). */
class UrlToolCreateData
{
    public ?string $custom_alia = null;
    public ?string $original_url = null;
    public ?string $short_url = null;
    public ?string $url = null;
}

/** Utility entity data model. */
class Utility
{
    public ?string $algorithm = null;
    public ?string $decoded = null;
    public string $encoded;
    public ?string $error = null;
    public ?string $flag = null;
    public ?string $formatted = null;
    public ?string $hash = null;
    public ?array $header = null;
    public ?int $indent = null;
    public ?bool $is_match = null;
    public string $json;
    public ?array $match = null;
    public ?array $parsed = null;
    public string $pattern;
    public ?array $payload = null;
    public ?string $signature = null;
    public string $text;
    public string $token;
    public ?bool $valid = null;
}

/** Match filter for Utility#create (any subset of Utility fields). */
class UtilityCreateData
{
    public ?string $algorithm = null;
    public ?string $decoded = null;
    public ?string $encoded = null;
    public ?string $error = null;
    public ?string $flag = null;
    public ?string $formatted = null;
    public ?string $hash = null;
    public ?array $header = null;
    public ?int $indent = null;
    public ?bool $is_match = null;
    public ?string $json = null;
    public ?array $match = null;
    public ?array $parsed = null;
    public ?string $pattern = null;
    public ?array $payload = null;
    public ?string $signature = null;
    public ?string $text = null;
    public ?string $token = null;
    public ?bool $valid = null;
}


<?php
declare(strict_types=1);

// DeveloperToolbox SDK utility: feature_add

class DeveloperToolboxFeatureAdd
{
    public static function call(DeveloperToolboxContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

<?php
declare(strict_types=1);

// DeveloperToolbox SDK utility: prepare_body

class DeveloperToolboxPrepareBody
{
    public static function call(DeveloperToolboxContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

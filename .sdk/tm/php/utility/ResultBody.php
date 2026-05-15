<?php
declare(strict_types=1);

// DeveloperToolbox SDK utility: result_body

class DeveloperToolboxResultBody
{
    public static function call(DeveloperToolboxContext $ctx): ?DeveloperToolboxResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

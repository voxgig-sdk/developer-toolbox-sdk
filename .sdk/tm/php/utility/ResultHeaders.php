<?php
declare(strict_types=1);

// DeveloperToolbox SDK utility: result_headers

class DeveloperToolboxResultHeaders
{
    public static function call(DeveloperToolboxContext $ctx): ?DeveloperToolboxResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

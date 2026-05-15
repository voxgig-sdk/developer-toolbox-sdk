<?php
declare(strict_types=1);

// DeveloperToolbox SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DeveloperToolboxMakeContext
{
    public static function call(array $ctxmap, ?DeveloperToolboxContext $basectx): DeveloperToolboxContext
    {
        return new DeveloperToolboxContext($ctxmap, $basectx);
    }
}

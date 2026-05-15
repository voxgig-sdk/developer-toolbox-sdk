<?php
declare(strict_types=1);

// DeveloperToolbox SDK exists test

require_once __DIR__ . '/../developertoolbox_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = DeveloperToolboxSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

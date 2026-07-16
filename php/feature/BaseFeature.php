<?php
declare(strict_types=1);

// DeveloperToolbox SDK base feature

class DeveloperToolboxBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(DeveloperToolboxContext $ctx, array $options): void {}
    public function PostConstruct(DeveloperToolboxContext $ctx): void {}
    public function PostConstructEntity(DeveloperToolboxContext $ctx): void {}
    public function SetData(DeveloperToolboxContext $ctx): void {}
    public function GetData(DeveloperToolboxContext $ctx): void {}
    public function GetMatch(DeveloperToolboxContext $ctx): void {}
    public function SetMatch(DeveloperToolboxContext $ctx): void {}
    public function PrePoint(DeveloperToolboxContext $ctx): void {}
    public function PreSpec(DeveloperToolboxContext $ctx): void {}
    public function PreRequest(DeveloperToolboxContext $ctx): void {}
    public function PreResponse(DeveloperToolboxContext $ctx): void {}
    public function PreResult(DeveloperToolboxContext $ctx): void {}
    public function PreDone(DeveloperToolboxContext $ctx): void {}
    public function PreUnexpected(DeveloperToolboxContext $ctx): void {}
}

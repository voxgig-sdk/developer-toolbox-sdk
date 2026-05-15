<?php
declare(strict_types=1);

// DeveloperToolbox SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

DeveloperToolboxUtility::setRegistrar(function (DeveloperToolboxUtility $u): void {
    $u->clean = [DeveloperToolboxClean::class, 'call'];
    $u->done = [DeveloperToolboxDone::class, 'call'];
    $u->make_error = [DeveloperToolboxMakeError::class, 'call'];
    $u->feature_add = [DeveloperToolboxFeatureAdd::class, 'call'];
    $u->feature_hook = [DeveloperToolboxFeatureHook::class, 'call'];
    $u->feature_init = [DeveloperToolboxFeatureInit::class, 'call'];
    $u->fetcher = [DeveloperToolboxFetcher::class, 'call'];
    $u->make_fetch_def = [DeveloperToolboxMakeFetchDef::class, 'call'];
    $u->make_context = [DeveloperToolboxMakeContext::class, 'call'];
    $u->make_options = [DeveloperToolboxMakeOptions::class, 'call'];
    $u->make_request = [DeveloperToolboxMakeRequest::class, 'call'];
    $u->make_response = [DeveloperToolboxMakeResponse::class, 'call'];
    $u->make_result = [DeveloperToolboxMakeResult::class, 'call'];
    $u->make_point = [DeveloperToolboxMakePoint::class, 'call'];
    $u->make_spec = [DeveloperToolboxMakeSpec::class, 'call'];
    $u->make_url = [DeveloperToolboxMakeUrl::class, 'call'];
    $u->param = [DeveloperToolboxParam::class, 'call'];
    $u->prepare_auth = [DeveloperToolboxPrepareAuth::class, 'call'];
    $u->prepare_body = [DeveloperToolboxPrepareBody::class, 'call'];
    $u->prepare_headers = [DeveloperToolboxPrepareHeaders::class, 'call'];
    $u->prepare_method = [DeveloperToolboxPrepareMethod::class, 'call'];
    $u->prepare_params = [DeveloperToolboxPrepareParams::class, 'call'];
    $u->prepare_path = [DeveloperToolboxPreparePath::class, 'call'];
    $u->prepare_query = [DeveloperToolboxPrepareQuery::class, 'call'];
    $u->result_basic = [DeveloperToolboxResultBasic::class, 'call'];
    $u->result_body = [DeveloperToolboxResultBody::class, 'call'];
    $u->result_headers = [DeveloperToolboxResultHeaders::class, 'call'];
    $u->transform_request = [DeveloperToolboxTransformRequest::class, 'call'];
    $u->transform_response = [DeveloperToolboxTransformResponse::class, 'call'];
});

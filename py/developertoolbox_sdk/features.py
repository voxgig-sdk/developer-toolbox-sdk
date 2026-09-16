# DeveloperToolbox SDK feature factory

from developertoolbox_sdk.feature.base_feature import DeveloperToolboxBaseFeature
from developertoolbox_sdk.feature.ratelimit_feature import DeveloperToolboxRatelimitFeature
from developertoolbox_sdk.feature.retry_feature import DeveloperToolboxRetryFeature
from developertoolbox_sdk.feature.test_feature import DeveloperToolboxTestFeature
from developertoolbox_sdk.feature.timeout_feature import DeveloperToolboxTimeoutFeature


_FEATURES = {
    "base": lambda: DeveloperToolboxBaseFeature(),
    "ratelimit": lambda: DeveloperToolboxRatelimitFeature(),
    "retry": lambda: DeveloperToolboxRetryFeature(),
    "test": lambda: DeveloperToolboxTestFeature(),
    "timeout": lambda: DeveloperToolboxTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

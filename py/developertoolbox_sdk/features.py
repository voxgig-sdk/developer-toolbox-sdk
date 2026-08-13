# DeveloperToolbox SDK feature factory

from developertoolbox_sdk.feature.base_feature import DeveloperToolboxBaseFeature
from developertoolbox_sdk.feature.test_feature import DeveloperToolboxTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DeveloperToolboxBaseFeature(),
        "test": lambda: DeveloperToolboxTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

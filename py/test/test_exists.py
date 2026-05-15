# ProjectName SDK exists test

import pytest
from developertoolbox_sdk import DeveloperToolboxSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = DeveloperToolboxSDK.test(None, None)
        assert testsdk is not None

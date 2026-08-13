# DeveloperToolbox SDK utility: make_context

from developertoolbox_sdk.core.context import DeveloperToolboxContext


def make_context_util(ctxmap, basectx):
    return DeveloperToolboxContext(ctxmap, basectx)

# DeveloperToolbox SDK utility: make_context

from projectname_sdk.core.context import DeveloperToolboxContext


def make_context_util(ctxmap, basectx):
    return DeveloperToolboxContext(ctxmap, basectx)

# Typed models for the DeveloperToolbox SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GeneratorRequired(TypedDict):
    data: str


class Generator(GeneratorRequired, total=False):
    password: str
    size: int
    uuids: list


class GeneratorLoadMatch(TypedDict, total=False):
    data: str
    password: str
    size: int
    uuids: list


class GeneratorListMatch(TypedDict, total=False):
    data: str
    password: str
    size: int
    uuids: list


class GeneratorCreateDataRequired(TypedDict):
    data: str


class GeneratorCreateData(GeneratorCreateDataRequired, total=False):
    password: str
    size: int
    uuids: list


class UrlToolRequired(TypedDict):
    url: str


class UrlTool(UrlToolRequired, total=False):
    customAlias: str
    originalUrl: str
    shortUrl: str


class UrlToolCreateDataRequired(TypedDict):
    url: str


class UrlToolCreateData(UrlToolCreateDataRequired, total=False):
    customAlias: str
    originalUrl: str
    shortUrl: str


class UtilityRequired(TypedDict):
    encoded: str
    json: str
    pattern: str
    text: str
    token: str


class Utility(UtilityRequired, total=False):
    algorithm: str
    decoded: str
    flags: str
    formatted: str
    hash: str
    header: dict
    indent: int
    isMatch: bool
    matches: list
    payload: dict
    signature: str


class UtilityCreateDataRequired(TypedDict):
    encoded: str
    json: str
    pattern: str
    text: str
    token: str


class UtilityCreateData(UtilityCreateDataRequired, total=False):
    algorithm: str
    decoded: str
    flags: str
    formatted: str
    hash: str
    header: dict
    indent: int
    isMatch: bool
    matches: list
    payload: dict
    signature: str

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
    uuid: list


class GeneratorLoadMatch(TypedDict, total=False):
    data: str
    password: str
    size: int
    uuid: list


class GeneratorListMatch(TypedDict, total=False):
    data: str
    password: str
    size: int
    uuid: list


class GeneratorCreateData(TypedDict, total=False):
    data: str
    password: str
    size: int
    uuid: list


class UrlToolRequired(TypedDict):
    url: str


class UrlTool(UrlToolRequired, total=False):
    custom_alia: str
    original_url: str
    short_url: str


class UrlToolCreateData(TypedDict, total=False):
    custom_alia: str
    original_url: str
    short_url: str
    url: str


class UtilityRequired(TypedDict):
    encoded: str
    json: str
    pattern: str
    text: str
    token: str


class Utility(UtilityRequired, total=False):
    algorithm: str
    decoded: str
    error: str
    flag: str
    formatted: str
    hash: str
    header: dict
    indent: int
    is_match: bool
    match: list
    parsed: dict
    payload: dict
    signature: str
    valid: bool


class UtilityCreateData(TypedDict, total=False):
    algorithm: str
    decoded: str
    encoded: str
    error: str
    flag: str
    formatted: str
    hash: str
    header: dict
    indent: int
    is_match: bool
    json: str
    match: list
    parsed: dict
    pattern: str
    payload: dict
    signature: str
    text: str
    token: str
    valid: bool

# Typed models for the DeveloperToolbox SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Generator:
    data: str
    password: Optional[str] = None
    size: Optional[int] = None
    uuid: Optional[list] = None


@dataclass
class GeneratorLoadMatch:
    data: Optional[str] = None
    password: Optional[str] = None
    size: Optional[int] = None
    uuid: Optional[list] = None


@dataclass
class GeneratorListMatch:
    data: Optional[str] = None
    password: Optional[str] = None
    size: Optional[int] = None
    uuid: Optional[list] = None


@dataclass
class GeneratorCreateData:
    data: Optional[str] = None
    password: Optional[str] = None
    size: Optional[int] = None
    uuid: Optional[list] = None


@dataclass
class UrlTool:
    url: str
    custom_alia: Optional[str] = None
    original_url: Optional[str] = None
    short_url: Optional[str] = None


@dataclass
class UrlToolCreateData:
    custom_alia: Optional[str] = None
    original_url: Optional[str] = None
    short_url: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Utility:
    encoded: str
    json: str
    pattern: str
    text: str
    token: str
    algorithm: Optional[str] = None
    decoded: Optional[str] = None
    error: Optional[str] = None
    flag: Optional[str] = None
    formatted: Optional[str] = None
    hash: Optional[str] = None
    header: Optional[dict] = None
    indent: Optional[int] = None
    is_match: Optional[bool] = None
    match: Optional[list] = None
    parsed: Optional[dict] = None
    payload: Optional[dict] = None
    signature: Optional[str] = None
    valid: Optional[bool] = None


@dataclass
class UtilityCreateData:
    algorithm: Optional[str] = None
    decoded: Optional[str] = None
    encoded: Optional[str] = None
    error: Optional[str] = None
    flag: Optional[str] = None
    formatted: Optional[str] = None
    hash: Optional[str] = None
    header: Optional[dict] = None
    indent: Optional[int] = None
    is_match: Optional[bool] = None
    json: Optional[str] = None
    match: Optional[list] = None
    parsed: Optional[dict] = None
    pattern: Optional[str] = None
    payload: Optional[dict] = None
    signature: Optional[str] = None
    text: Optional[str] = None
    token: Optional[str] = None
    valid: Optional[bool] = None


// Typed models for the DeveloperToolbox SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/developer-toolbox-sdk/go/core"
)

// Generator is the typed data model for the generator entity.
type Generator struct {
	Data string `json:"data"`
	Password *string `json:"password,omitempty"`
	Size *int `json:"size,omitempty"`
	Uuids *[]any `json:"uuids,omitempty"`
}

// GeneratorLoadMatch is the typed request payload for Generator.LoadTyped.
type GeneratorLoadMatch struct {
	Length *int `json:"length,omitempty"`
	Lowercase *bool `json:"lowercase,omitempty"`
	Number *bool `json:"number,omitempty"`
	Symbol *bool `json:"symbol,omitempty"`
	Uppercase *bool `json:"uppercase,omitempty"`
}

// GeneratorListMatch is the typed request payload for Generator.ListTyped.
type GeneratorListMatch struct {
	Count *int `json:"count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GeneratorCreateData is the typed request payload for Generator.CreateTyped.
type GeneratorCreateData struct {
	Data string `json:"data"`
	Password *string `json:"password,omitempty"`
	Size *int `json:"size,omitempty"`
	Uuids *[]any `json:"uuids,omitempty"`
}

// UrlTool is the typed data model for the url_tool entity.
type UrlTool struct {
	CustomAlias *string `json:"customAlias,omitempty"`
	OriginalUrl *string `json:"originalUrl,omitempty"`
	ShortUrl *string `json:"shortUrl,omitempty"`
	Url string `json:"url"`
}

// UrlToolCreateData is the typed request payload for UrlTool.CreateTyped.
type UrlToolCreateData struct {
	CustomAlias *string `json:"customAlias,omitempty"`
	OriginalUrl *string `json:"originalUrl,omitempty"`
	ShortUrl *string `json:"shortUrl,omitempty"`
	Url string `json:"url"`
}

// Utility is the typed data model for the utility entity.
type Utility struct {
	Algorithm *string `json:"algorithm,omitempty"`
	Decoded *string `json:"decoded,omitempty"`
	Encoded string `json:"encoded"`
	Flags *string `json:"flags,omitempty"`
	Formatted *string `json:"formatted,omitempty"`
	Hash *string `json:"hash,omitempty"`
	Header *map[string]any `json:"header,omitempty"`
	Indent *int `json:"indent,omitempty"`
	IsMatch *bool `json:"isMatch,omitempty"`
	Json string `json:"json"`
	Matches *[]any `json:"matches,omitempty"`
	Pattern string `json:"pattern"`
	Payload *map[string]any `json:"payload,omitempty"`
	Signature *string `json:"signature,omitempty"`
	Text string `json:"text"`
	Token string `json:"token"`
}

// UtilityCreateData is the typed request payload for Utility.CreateTyped.
type UtilityCreateData struct {
	Algorithm *string `json:"algorithm,omitempty"`
	Decoded *string `json:"decoded,omitempty"`
	Encoded string `json:"encoded"`
	Flags *string `json:"flags,omitempty"`
	Formatted *string `json:"formatted,omitempty"`
	Hash *string `json:"hash,omitempty"`
	Header *map[string]any `json:"header,omitempty"`
	Indent *int `json:"indent,omitempty"`
	IsMatch *bool `json:"isMatch,omitempty"`
	Json string `json:"json"`
	Matches *[]any `json:"matches,omitempty"`
	Pattern string `json:"pattern"`
	Payload *map[string]any `json:"payload,omitempty"`
	Signature *string `json:"signature,omitempty"`
	Text string `json:"text"`
	Token string `json:"token"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

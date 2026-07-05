// Typed models for the DeveloperToolbox SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Generator is the typed data model for the generator entity.
type Generator struct {
	Data string `json:"data"`
	Password *string `json:"password,omitempty"`
	Size *int `json:"size,omitempty"`
	Uuid *[]any `json:"uuid,omitempty"`
}

// GeneratorLoadMatch is the typed request payload for Generator.LoadTyped.
type GeneratorLoadMatch struct {
	Data *string `json:"data,omitempty"`
	Password *string `json:"password,omitempty"`
	Size *int `json:"size,omitempty"`
	Uuid *[]any `json:"uuid,omitempty"`
}

// GeneratorListMatch is the typed request payload for Generator.ListTyped.
type GeneratorListMatch struct {
	Data *string `json:"data,omitempty"`
	Password *string `json:"password,omitempty"`
	Size *int `json:"size,omitempty"`
	Uuid *[]any `json:"uuid,omitempty"`
}

// GeneratorCreateData is the typed request payload for Generator.CreateTyped.
type GeneratorCreateData struct {
	Data string `json:"data"`
	Password *string `json:"password,omitempty"`
	Size *int `json:"size,omitempty"`
	Uuid *[]any `json:"uuid,omitempty"`
}

// UrlTool is the typed data model for the url_tool entity.
type UrlTool struct {
	CustomAlia *string `json:"custom_alia,omitempty"`
	OriginalUrl *string `json:"original_url,omitempty"`
	ShortUrl *string `json:"short_url,omitempty"`
	Url string `json:"url"`
}

// UrlToolCreateData is the typed request payload for UrlTool.CreateTyped.
type UrlToolCreateData struct {
	CustomAlia *string `json:"custom_alia,omitempty"`
	OriginalUrl *string `json:"original_url,omitempty"`
	ShortUrl *string `json:"short_url,omitempty"`
	Url string `json:"url"`
}

// Utility is the typed data model for the utility entity.
type Utility struct {
	Algorithm *string `json:"algorithm,omitempty"`
	Decoded *string `json:"decoded,omitempty"`
	Encoded string `json:"encoded"`
	Error *string `json:"error,omitempty"`
	Flag *string `json:"flag,omitempty"`
	Formatted *string `json:"formatted,omitempty"`
	Hash *string `json:"hash,omitempty"`
	Header *map[string]any `json:"header,omitempty"`
	Indent *int `json:"indent,omitempty"`
	IsMatch *bool `json:"is_match,omitempty"`
	Json string `json:"json"`
	Match *[]any `json:"match,omitempty"`
	Parsed *map[string]any `json:"parsed,omitempty"`
	Pattern string `json:"pattern"`
	Payload *map[string]any `json:"payload,omitempty"`
	Signature *string `json:"signature,omitempty"`
	Text string `json:"text"`
	Token string `json:"token"`
	Valid *bool `json:"valid,omitempty"`
}

// UtilityCreateData is the typed request payload for Utility.CreateTyped.
type UtilityCreateData struct {
	Algorithm *string `json:"algorithm,omitempty"`
	Decoded *string `json:"decoded,omitempty"`
	Encoded string `json:"encoded"`
	Error *string `json:"error,omitempty"`
	Flag *string `json:"flag,omitempty"`
	Formatted *string `json:"formatted,omitempty"`
	Hash *string `json:"hash,omitempty"`
	Header *map[string]any `json:"header,omitempty"`
	Indent *int `json:"indent,omitempty"`
	IsMatch *bool `json:"is_match,omitempty"`
	Json string `json:"json"`
	Match *[]any `json:"match,omitempty"`
	Parsed *map[string]any `json:"parsed,omitempty"`
	Pattern string `json:"pattern"`
	Payload *map[string]any `json:"payload,omitempty"`
	Signature *string `json:"signature,omitempty"`
	Text string `json:"text"`
	Token string `json:"token"`
	Valid *bool `json:"valid,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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

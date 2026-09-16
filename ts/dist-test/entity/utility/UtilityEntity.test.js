"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('UtilityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DEVELOPER_TOOLBOX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DEVELOPER_TOOLBOX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DeveloperToolboxSDK.test();
        const ent = testsdk.Utility();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DEVELOPER_TOOLBOX_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'utility.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "algorithm", "req": false, "short": "Hashing algorithm to use", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "decoded", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "encoded", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "Base64 encoded text to decode", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "flags", "req": false, "short": "Regex flags (g, i, m, s, u, y)", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "formatted", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "hash", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "header", "req": false, "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "indent", "req": false, "short": "Number of spaces for indentation", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "isMatch", "req": false, "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "json", "req": true, "short": "JSON string to format", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "matches", "req": false, "type": "`$ARRAY`", "index$": 10 }, { "active": true, "name": "pattern", "req": true, "short": "Regular expression pattern", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "payload", "req": false, "type": "`$OBJECT`", "index$": 12 }, { "active": true, "name": "signature", "req": false, "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "text", "req": true, "short": "Text to encode", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "token", "req": true, "short": "JWT token to decode", "type": "`$STRING`", "index$": 15 }], "name": "utility", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/base64/decode", "json": "{\"operationId\":\"base64Decode\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"encoded\":{\"description\":\"Base64 encoded text to decode\",\"type\":\"string\"}},\"required\":[\"encoded\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"decoded\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successfully decoded from Base64\"},\"400\":{\"description\":\"Invalid Base64 string\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/base64/decode", "segments": [{ "lit": "api" }, { "lit": "base64" }, { "lit": "decode" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST /api/base64/encode", "json": "{\"operationId\":\"base64Encode\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"text\":{\"description\":\"Text to encode\",\"type\":\"string\"}},\"required\":[\"text\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"encoded\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successfully encoded to Base64\"},\"400\":{\"description\":\"Invalid request parameters\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/base64/encode", "segments": [{ "lit": "api" }, { "lit": "base64" }, { "lit": "encode" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": {}, "contract": { "id": "POST /api/hash", "json": "{\"operationId\":\"hashText\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"algorithm\":{\"default\":\"sha256\",\"description\":\"Hashing algorithm to use\",\"enum\":[\"md5\",\"sha1\",\"sha256\",\"sha512\"],\"type\":\"string\"},\"text\":{\"description\":\"Text to hash\",\"type\":\"string\"}},\"required\":[\"text\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"algorithm\":{\"type\":\"string\"},\"hash\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successfully generated hash\"},\"400\":{\"description\":\"Invalid request parameters\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/hash", "segments": [{ "lit": "api" }, { "lit": "hash" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST /api/json/format", "json": "{\"operationId\":\"formatJSON\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"indent\":{\"default\":2,\"description\":\"Number of spaces for indentation\",\"maximum\":8,\"minimum\":1,\"type\":\"integer\"},\"json\":{\"description\":\"JSON string to format\",\"type\":\"string\"}},\"required\":[\"json\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"formatted\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successfully formatted JSON\"},\"400\":{\"description\":\"Invalid JSON string\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/json/format", "segments": [{ "lit": "api" }, { "lit": "json" }, { "lit": "format" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "active": true, "args": {}, "contract": { "id": "POST /api/json/validate", "json": "{\"operationId\":\"validateJSON\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"json\":{\"description\":\"JSON string to validate\",\"type\":\"string\"}},\"required\":[\"json\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"type\":\"string\"},\"parsed\":{\"type\":\"object\"},\"valid\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"JSON validation result\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/json/validate", "segments": [{ "lit": "api" }, { "lit": "json" }, { "lit": "validate" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.parsed`" }, "index$": 4 }, { "active": true, "args": {}, "contract": { "id": "POST /api/jwt/decode", "json": "{\"operationId\":\"decodeJWT\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"token\":{\"description\":\"JWT token to decode\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"header\":{\"type\":\"object\"},\"payload\":{\"type\":\"object\"},\"signature\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successfully decoded JWT\"},\"400\":{\"description\":\"Invalid JWT token\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/jwt/decode", "segments": [{ "lit": "api" }, { "lit": "jwt" }, { "lit": "decode" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }, { "active": true, "args": {}, "contract": { "id": "POST /api/regex/test", "json": "{\"operationId\":\"testRegex\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"flags\":{\"default\":\"\",\"description\":\"Regex flags (g, i, m, s, u, y)\",\"type\":\"string\"},\"pattern\":{\"description\":\"Regular expression pattern\",\"type\":\"string\"},\"text\":{\"description\":\"Text to test against pattern\",\"type\":\"string\"}},\"required\":[\"pattern\",\"text\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"isMatch\":{\"type\":\"boolean\"},\"matches\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successfully tested regex\"},\"400\":{\"description\":\"Invalid regex pattern\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/regex/test", "segments": [{ "lit": "api" }, { "lit": "regex" }, { "lit": "test" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "utility", "name__orig": "utility", "Name": "Utility", "name_": "utility", "name-": "utility", "NAME": "UTILITY", "index$": 2 }, { "active": true, "entity": "utility", "key$": "BasicUtilityFlow", "kind": "basic", "name": "BasicUtilityFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "utility_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'Utility');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const utility_ref01_ent = client.Utility();
        let utility_ref01_data = setup.data.new.utility['utility_ref01'];
        utility_ref01_data = (await utility_ref01_ent.create(utility_ref01_data)).data();
        (0, node_assert_1.default)(null != utility_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/utility/UtilityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DeveloperToolboxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['utility01', 'utility02', 'utility03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DEVELOPER_TOOLBOX_TEST_UTILITY_ENTID': idmap,
        'DEVELOPER_TOOLBOX_TEST_LIVE': 'FALSE',
        'DEVELOPER_TOOLBOX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['DEVELOPER_TOOLBOX_TEST_UTILITY_ENTID'];
    const live = 'TRUE' === env.DEVELOPER_TOOLBOX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DEVELOPER_TOOLBOX_TEST_UTILITY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.DeveloperToolboxSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.DEVELOPER_TOOLBOX_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=UtilityEntity.test.js.map
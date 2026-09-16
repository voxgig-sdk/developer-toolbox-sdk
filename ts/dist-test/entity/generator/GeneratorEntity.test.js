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
(0, node_test_1.describe)('GeneratorEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DEVELOPER_TOOLBOX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DEVELOPER_TOOLBOX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DeveloperToolboxSDK.test();
        const ent = testsdk.Generator();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DEVELOPER_TOOLBOX_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'generator.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "data", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "req": true, "short": "Text or URL to encode in QR code", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "password", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "size", "req": false, "short": "Size of QR code in pixels", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "uuids", "req": false, "type": "`$ARRAY`", "index$": 3 }], "name": "generator", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/qrcode", "json": "{\"operationId\":\"generateQRCode\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Text or URL to encode in QR code\",\"type\":\"string\"},\"size\":{\"default\":200,\"description\":\"Size of QR code in pixels\",\"maximum\":1000,\"minimum\":100,\"type\":\"integer\"}},\"required\":[\"data\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successfully generated QR code\"},\"400\":{\"description\":\"Invalid request parameters\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/qrcode", "segments": [{ "lit": "api" }, { "lit": "qrcode" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 1, "kind": "query", "name": "count", "orig": "count", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": "user", "kind": "query", "name": "type", "orig": "type", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/fake-data", "json": "{\"operationId\":\"generateFakeData\",\"parameters\":[{\"description\":\"Type of fake data to generate\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"default\":\"user\",\"enum\":[\"name\",\"email\",\"address\",\"phone\",\"company\",\"user\"],\"type\":\"string\"}},{\"description\":\"Number of records to generate\",\"in\":\"query\",\"name\":\"count\",\"required\":false,\"schema\":{\"default\":1,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successfully generated fake data\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/fake-data", "segments": [{ "lit": "api" }, { "lit": "fake-data" }], "select": { "exist": ["count", "type"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "example": 1, "kind": "query", "name": "count", "orig": "count", "reqd": false, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /api/uuid", "json": "{\"operationId\":\"generateUUID\",\"parameters\":[{\"description\":\"Number of UUIDs to generate\",\"in\":\"query\",\"name\":\"count\",\"required\":false,\"schema\":{\"default\":1,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"uuids\":{\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successfully generated UUID(s)\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/uuid", "segments": [{ "lit": "api" }, { "lit": "uuid" }], "select": { "exist": ["count"] }, "transform": { "req": "`reqdata`", "res": "`body.uuids`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 16, "kind": "query", "name": "length", "orig": "length", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": true, "kind": "query", "name": "lowercase", "orig": "lowercase", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "example": true, "kind": "query", "name": "number", "orig": "number", "reqd": false, "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "example": true, "kind": "query", "name": "symbol", "orig": "symbol", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "example": true, "kind": "query", "name": "uppercase", "orig": "uppercase", "reqd": false, "type": "`$BOOLEAN`", "index$": 4 }] }, "contract": { "id": "GET /api/password", "json": "{\"operationId\":\"generatePassword\",\"parameters\":[{\"description\":\"Length of password\",\"in\":\"query\",\"name\":\"length\",\"required\":false,\"schema\":{\"default\":16,\"maximum\":128,\"minimum\":8,\"type\":\"integer\"}},{\"description\":\"Include uppercase letters\",\"in\":\"query\",\"name\":\"uppercase\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Include lowercase letters\",\"in\":\"query\",\"name\":\"lowercase\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Include numbers\",\"in\":\"query\",\"name\":\"numbers\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Include special symbols\",\"in\":\"query\",\"name\":\"symbols\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"password\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successfully generated password\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/password", "segments": [{ "lit": "api" }, { "lit": "password" }], "select": { "exist": ["length", "lowercase", "number", "symbol", "uppercase"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "generator", "name__orig": "generator", "Name": "Generator", "name_": "generator", "name-": "generator", "NAME": "GENERATOR", "index$": 0 }, { "active": true, "entity": "generator", "key$": "BasicGeneratorFlow", "kind": "basic", "name": "BasicGeneratorFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "generator_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "generator_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "generator_ref01", "srcdatavar": "generator_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-generator_ref01" } }], "index$": 2 }] }, 'Generator');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const generator_ref01_ent = client.Generator();
        let generator_ref01_data = setup.data.new.generator['generator_ref01'];
        generator_ref01_data = (await generator_ref01_ent.create(generator_ref01_data)).data();
        (0, node_assert_1.default)(null != generator_ref01_data);
        // LIST
        const generator_ref01_match = {};
        const generator_ref01_list = (await generator_ref01_ent.list(generator_ref01_match)).map((e) => e.data());
        // LOAD
        const generator_ref01_match_dt0 = {};
        const generator_ref01_data_dt0 = (await generator_ref01_ent.load(generator_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != generator_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/generator/GeneratorTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DeveloperToolboxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['generator01', 'generator02', 'generator03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DEVELOPER_TOOLBOX_TEST_GENERATOR_ENTID': idmap,
        'DEVELOPER_TOOLBOX_TEST_LIVE': 'FALSE',
        'DEVELOPER_TOOLBOX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['DEVELOPER_TOOLBOX_TEST_GENERATOR_ENTID'];
    const live = 'TRUE' === env.DEVELOPER_TOOLBOX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DEVELOPER_TOOLBOX_TEST_GENERATOR_ENTID'];
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
//# sourceMappingURL=GeneratorEntity.test.js.map
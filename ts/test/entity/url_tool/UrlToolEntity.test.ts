

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DeveloperToolboxSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('UrlToolEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DEVELOPER_TOOLBOX_TEST_LIVE=TRUE.
  afterEach(liveDelay('DEVELOPER_TOOLBOX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DeveloperToolboxSDK.test()
    const ent = testsdk.UrlTool()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DEVELOPER_TOOLBOX_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'url_tool.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"customAlias","req":false,"short":"Custom alias for shortened URL","type":"`$STRING`","index$":0},{"active":true,"format":"uri","name":"originalUrl","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"shortUrl","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"uri","name":"url","req":true,"short":"URL to shorten","type":"`$STRING`","index$":3}],"name":"url_tool","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/url/shorten","json":"{\"operationId\":\"shortenURL\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"customAlias\":{\"description\":\"Custom alias for shortened URL\",\"type\":\"string\"},\"url\":{\"description\":\"URL to shorten\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"url\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"originalUrl\":{\"format\":\"uri\",\"type\":\"string\"},\"shortUrl\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successfully shortened URL\"},\"400\":{\"description\":\"Invalid URL or alias already taken\"}},\"securitySchemes\":{},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/url/shorten","segments":[{"lit":"api"},{"lit":"url"},{"lit":"shorten"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"url_tool","name__orig":"url_tool","Name":"UrlTool","name_":"url_tool","name-":"url-tool","NAME":"URL_TOOL","index$":1}, {"active":true,"entity":"url_tool","key$":"BasicUrlToolFlow","kind":"basic","name":"BasicUrlToolFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"url_tool_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'UrlTool')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const url_tool_ref01_ent = client.UrlTool()
    let url_tool_ref01_data = setup.data.new.url_tool['url_tool_ref01']

    url_tool_ref01_data = (await url_tool_ref01_ent.create(url_tool_ref01_data)).data()
    assert(null != url_tool_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/url_tool/UrlToolTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = DeveloperToolboxSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['url_tool01','url_tool02','url_tool03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DEVELOPER_TOOLBOX_TEST_URL_TOOL_ENTID': idmap,
    'DEVELOPER_TOOLBOX_TEST_LIVE': 'FALSE',
    'DEVELOPER_TOOLBOX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DEVELOPER_TOOLBOX_TEST_URL_TOOL_ENTID']

  const live = 'TRUE' === env.DEVELOPER_TOOLBOX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DEVELOPER_TOOLBOX_TEST_URL_TOOL_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new DeveloperToolboxSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  

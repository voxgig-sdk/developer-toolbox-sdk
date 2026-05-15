
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DeveloperToolboxSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await DeveloperToolboxSDK.test()
    equal(null !== testsdk, true)
  })

})

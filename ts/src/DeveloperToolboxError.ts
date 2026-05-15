
import { Context } from './Context'


class DeveloperToolboxError extends Error {

  isDeveloperToolboxError = true

  sdk = 'DeveloperToolbox'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  DeveloperToolboxError
}


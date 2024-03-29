import { InvalidCookieArgsError } from './errors'

import * as cookie from 'cookie'

export class CookieAdapter {
  static serialize(
    name: string,
    value: string,
    options?: cookie.CookieSerializeOptions | undefined
  ): string {
    if (!name) {
      throw new InvalidCookieArgsError()
    }

    return cookie.serialize(name, value, options)
  }
}

import * as cookie from 'cookie'

export class CookieAdapter {
  static serialize (
    name: string,
    value: string,
    options?: cookie.CookieSerializeOptions | undefined
  ): string {
    return cookie.serialize(name, value, options)
  }
}

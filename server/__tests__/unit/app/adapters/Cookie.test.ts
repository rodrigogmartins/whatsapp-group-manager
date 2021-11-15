import { CookieAdapter } from '@/app/adapters'
import { InvalidCookieArgsError } from '@/app/adapters/errors'

describe('Cookie Adapter Test', () => {
  it('should create a cookie without options', () => {
    const cookie = CookieAdapter.serialize('my-cookie', 'cookie-value')

    expect(cookie).toEqual('my-cookie=cookie-value')
  })

  it('should create a cookie with options', () => {
    const cookie = CookieAdapter.serialize('my-cookie', 'cookie-value', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 3600,
      path: '/'
    })

    expect(cookie).toEqual(
      'my-cookie=cookie-value; Max-Age=3600; Path=/; HttpOnly; Secure; SameSite=Strict'
    )
  })

  describe('should return InvalidCookieArgsError', () => {
    it('when try create a cookie without value', () => {
      expect(() => CookieAdapter.serialize('my-cookie', '')).toThrowError(
        InvalidCookieArgsError
      )
    })

    it('when try create a cookie without name', () => {
      expect(() => CookieAdapter.serialize('', 'cookie-value')).toThrowError(
        InvalidCookieArgsError
      )
    })
  })
})

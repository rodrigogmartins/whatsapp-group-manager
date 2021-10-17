import { CookieAdapter } from '@/app/adapters'

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
        'O cookie deve possuir nome e valor'
      )
    })

    it('when try create a cookie without name', () => {
      expect(() => CookieAdapter.serialize('', 'cookie-value')).toThrowError(
        'O cookie deve possuir nome e valor'
      )
    })
  })
})

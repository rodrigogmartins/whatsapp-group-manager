import { CookieAdapter } from '@/infra/adapters'
import { UserLogout } from '@/domain/User/UserLogout'

export class UserLogoutHandler implements UserLogout {
  constructor() {}

  async logout(): Promise<string> {
    return CookieAdapter.serialize('auth', '', {
      httpOnly: true,
      secure: process.env.ENVIRONMENT !== 'development',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })
  }
}

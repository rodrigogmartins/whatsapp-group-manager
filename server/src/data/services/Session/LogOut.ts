import { SessionLogOut } from '@/domain/usecases'
import { CookieAdapter } from '@/app/adapters'

export class SessionLogOutService implements SessionLogOut {
  constructor () {}

  async logOut (): Promise<string> {
    return CookieAdapter.serialize('auth', '', {
      httpOnly: true,
      secure: process.env.ENVIRONMENT !== 'development',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })
  }
}

import { CookieAdapter, HashAdapter, JwtAdapter } from '@/app/adapters'

import { UserRepository } from '@/domain/User'
import { UserLogin, InvalidPasswordError } from '@/domain/User/UserLogin'

export class UserLoginImpl implements UserLogin {
  constructor(private readonly userRepository: UserRepository) {}

  async login(login: string, password: string): Promise<string> {
    const user = await this.userRepository.getFromLogin(login)
    const isSamePassword = await HashAdapter.compare(password, user.password)

    if (!isSamePassword) {
      throw new InvalidPasswordError()
    }

    const claims = { sub: user.id, name: user.name }
    const jwt = JwtAdapter.generateToken(claims, process.env.SECRET_KEY!, {
      expiresIn: '1h'
    })

    return CookieAdapter.serialize('auth', jwt, {
      httpOnly: true,
      secure: process.env.ENVIRONMENT !== 'development',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/'
    })
  }
}

import { SessionLogIn } from '@/domain/usecases'
import { UserRepository } from '@/data/interfaces/UserRepository'
import { CookieAdapter, HashAdapter, JwtAdapter } from '@/app/adapters'
import { InvalidPasswordError } from '@/data/errors/InvalidPasswordError'

export class SessionLogInService implements SessionLogIn {
  constructor (private readonly userRepository: UserRepository) {}

  async logIn (login: string, password: string): Promise<string> {
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

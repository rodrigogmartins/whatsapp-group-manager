import { UserRepository } from '@/data/interfaces/UserRepository'
import { JwtAdapter } from '@/app/adapters'
import { UserEmailVerificator } from '@/domain/usecases/User/UserEmailVerificator'
import { TokenValidationError } from '@/data/errors'

export class UserEmailVerificatorService implements UserEmailVerificator {
  constructor (private readonly userRepository: UserRepository) {}

  async verify (token: string, secretKey: string): Promise<boolean> {
    const { user }: any = JwtAdapter.verifyToken(token, secretKey)

    if (!user) {
      throw new TokenValidationError()
    }

    const userDataToUpdate = { id: user, confirmed: true }

    await this.userRepository.update(userDataToUpdate)

    return true
  }
}

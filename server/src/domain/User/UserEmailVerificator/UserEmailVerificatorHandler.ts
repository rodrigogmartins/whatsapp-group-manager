import { JwtAdapter } from '@/app/adapters'
import { UserRepository } from '@/domain/User'
import {
  UserEmailVerificator,
  TokenValidationError
} from '@/domain/User/UserEmailVerificator'

export class UserEmailVerificatorHandler implements UserEmailVerificator {
  constructor(private readonly userRepository: UserRepository) {}

  async verify(token: string, secretKey: string): Promise<boolean> {
    const { user }: any = JwtAdapter.parseToken(token, secretKey)

    if (!user) {
      throw new TokenValidationError()
    }

    const userDataToUpdate = { id: user, confirmed: true }

    // TODO - Ajustar contrato do update
    // await this.userRepository.update(userDataToUpdate)

    return true
  }
}

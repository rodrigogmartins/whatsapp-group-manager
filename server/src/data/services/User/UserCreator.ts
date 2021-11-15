import { HashAdapter } from '@/app/adapters'
import { UserInput, UserRepository } from '@/data/interfaces'
import { User } from '@/domain/entities'
import { UserCreator } from '@/domain/usecases'
import { validateEmail, validatePassword } from '@/domain/validators'

export class UserCreatorService implements UserCreator {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: UserInput): Promise<User> {
    validateEmail(user.email)
    validatePassword(user.password)

    const hashedPassword = await HashAdapter.generate(user.password)
    const userPostgres = {
      id: user.id,
      name: user.name,
      cpf_cnpj: user.cpfCnpj,
      email: user.email,
      password: hashedPassword,
      email_confirmed: false
    }

    return this.userRepository.create(userPostgres)
  }
}

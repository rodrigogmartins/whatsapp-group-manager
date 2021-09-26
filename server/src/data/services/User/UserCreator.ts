import { User } from '@/domain/entities'
import { UserCreator } from '@/domain/usecases'
import { UserInput, UserRepository } from '@/data/interfaces'

export class UserCreatorService implements UserCreator {
  constructor (private readonly userRepository: UserRepository) {}

  async create (user: UserInput): Promise<User> {
    // Validações

    const userPostgres = {
      id: user.id,
      name: user.name,
      cpf_cnpj: user.cpfCnpj,
      email: user.email,
      password: user.password,
      email_confirmed: false
    }

    return this.userRepository.create(userPostgres)
  }
}

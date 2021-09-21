import { Controller } from '@/view/interfaces'
import { UserCreatorController } from '@/view/controllers'
import { CreateUserService } from '@/data/services'
import { UserPostgresqlRepository } from '@/infra/repository'

export const makeUserCreatorController = (): Controller => {
  const repository = new UserPostgresqlRepository()
  const creator = new CreateUserService(repository)

  return new UserCreatorController(creator)
}

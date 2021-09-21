import { Controller } from '@/view/interfaces'
import { UserController } from '@/view/controllers'
import { UserCreatorService } from '@/data/services'
import { KnexUserRepository } from '@/infra/repository'

export const makeUserController = (): Controller => {
  const repository = new KnexUserRepository()
  const creator = new UserCreatorService(repository)

  return new UserController(creator)
}

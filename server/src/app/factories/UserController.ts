import { Controller } from '@/view/interfaces'
import { UserCreatorController } from '@/view/controllers'
import { UserCreatorService } from '@/data/services'
import { KnexUserRepository } from '@/infra/repository'

export const makeUserCreatorController = (): Controller => {
  const repository = new KnexUserRepository()
  const creator = new UserCreatorService(repository)

  return new UserCreatorController(creator)
}

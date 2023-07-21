import { Controller } from '@/view/interfaces'
import { UserPostgresqlRepository } from '@/infra/repository'
import {
  UserCreatorController,
  UserUpdaterController,
  UserEmailVerificatorController
} from '@/view/controllers'
import {
  UserCreatorUsecase,
  UserEmailVerificatorService,
  UserUpdaterService
} from '@/data/services'
import { UserRepository } from '@/data/interfaces'

export const makeUserController = () => {
  const repository = new UserPostgresqlRepository()

  return {
    creator: () => makeUserCreatorController(repository),
    updater: () => makeUserUpdaterController(repository),
    emailValidator: () => makeUserEmailVerificatorController(repository)
  }
}

const makeUserCreatorController = (repository: UserRepository): Controller => {
  const creator = new UserCreatorUsecase(repository)

  return new UserCreatorController(creator)
}

const makeUserUpdaterController = (repository: UserRepository): Controller => {
  const updater = new UserUpdaterService(repository)

  return new UserUpdaterController(updater)
}

const makeUserEmailVerificatorController = (
  repository: UserRepository
): Controller => {
  const remover = new UserEmailVerificatorService(repository)

  return new UserEmailVerificatorController(remover)
}

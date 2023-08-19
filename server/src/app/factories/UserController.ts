import { Controller } from '@/view/interfaces'
import {
  UserCreatorController,
  UserUpdaterController,
  UserEmailVerificatorController,
  UserLoginInController,
  UserLogoutController
} from '@/view/controllers/User'
import { UserRepository } from '@/domain/User'
import { UserCreatorHandler } from '@/domain/User/UserCreator'
import { UserUpdaterHandler } from '@/domain/User/UserUpdater'
import { UserEmailVerificatorHandler } from '@/domain/User/UserEmailVerificator'
import { UserLoginHandler } from '@/domain/User/UserLogin'
import { UserLogoutHandler } from '@/domain/User/UserLogout'
import { UserPostgresqlRepository } from '@/infra/repository/User'

export const makeUserController = () => {
  const repository = new UserPostgresqlRepository()

  return {
    creator: () => makeUserCreatorController(repository),
    updater: () => makeUserUpdaterController(repository),
    emailValidator: () => makeUserEmailVerificatorController(repository),
    login: () => makeUserLoginInController(repository),
    logout: () => makeUserLogoutController()
  }
}

const makeUserCreatorController = (repository: UserRepository): Controller => {
  const creator = new UserCreatorHandler(repository)

  return new UserCreatorController(creator)
}

const makeUserUpdaterController = (repository: UserRepository): Controller => {
  const updater = new UserUpdaterHandler(repository)

  return new UserUpdaterController(updater)
}

const makeUserEmailVerificatorController = (
  repository: UserRepository
): Controller => {
  const remover = new UserEmailVerificatorHandler(repository)

  return new UserEmailVerificatorController(remover)
}

const makeUserLoginInController = (repository: UserRepository): Controller => {
  const userLoginHandler = new UserLoginHandler(repository)

  return new UserLoginInController(userLoginHandler)
}

const makeUserLogoutController = (): Controller => {
  const userLogoutHandler = new UserLogoutHandler()

  return new UserLogoutController(userLogoutHandler)
}

import { Controller } from '@/view/interfaces'
import { UserPostgresqlRepository } from '@/infra/repository'
import {
  UserCreatorController,
  UserLoaderController,
  UsersCollectionLoaderController,
  UserUpdaterController,
  UserRemoverController,
  UserEmailVerificatorController
} from '@/view/controllers'
import {
  UserCreatorService,
  UserEmailVerificatorService,
  UserLoaderService,
  UserRemoverService,
  UsersCollectionLoaderService,
  UserUpdaterService
} from '@/data/services'
import { UserRepository } from '@/data/interfaces'

export const makeUserController = () => {
  const repository = new UserPostgresqlRepository()

  return {
    creator: () => makeUserCreatorController(repository),
    loader: () => makeUserLoaderController(repository),
    collectionLoader: () => makeUsersCollectionLoaderController(repository),
    updater: () => makeUserUpdaterController(repository),
    remover: () => makeUserRemoverController(repository),
    emailValidator: () => makeUserEmailVerificatorController(repository)
  }
}

const makeUserCreatorController = (repository: UserRepository): Controller => {
  const creator = new UserCreatorService(repository)

  return new UserCreatorController(creator)
}

const makeUserLoaderController = (repository: UserRepository): Controller => {
  const loader = new UserLoaderService(repository)

  return new UserLoaderController(loader)
}

const makeUsersCollectionLoaderController = (
  repository: UserRepository
): Controller => {
  const loader = new UsersCollectionLoaderService(repository)

  return new UsersCollectionLoaderController(loader)
}

const makeUserUpdaterController = (repository: UserRepository): Controller => {
  const updater = new UserUpdaterService(repository)

  return new UserUpdaterController(updater)
}

const makeUserRemoverController = (repository: UserRepository): Controller => {
  const remover = new UserRemoverService(repository)

  return new UserRemoverController(remover)
}

const makeUserEmailVerificatorController = (
  repository: UserRepository
): Controller => {
  const remover = new UserEmailVerificatorService(repository)

  return new UserEmailVerificatorController(remover)
}

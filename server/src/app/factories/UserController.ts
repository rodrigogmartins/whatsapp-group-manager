import { Controller } from '@/view/interfaces'
import { UserPostgresqlRepository } from '@/infra/repository'
import {
  UserCreatorController,
  UserLoaderController,
  UsersCollectionLoaderController,
  UserUpdaterController
} from '@/view/controllers'
import {
  UserCreatorService,
  UserLoaderService,
  UserRemoverService,
  UsersCollectionLoaderService,
  UserUpdaterService
} from '@/data/services'
import { UserRemoverController } from '@/view/controllers/UserRemover'
import { UserRepository } from '@/data/interfaces'

export const makeUserController = () => {
  const repository = new UserPostgresqlRepository()

  return {
    creator: () => makeUserCreatorController(repository),
    loader: () => makeUserLoaderController(repository),
    collectionLoader: () => makeUsersCollectionLoaderController(repository),
    updater: () => makeUserUpdaterController(repository),
    remover: () => makeUserRemoverController(repository)
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

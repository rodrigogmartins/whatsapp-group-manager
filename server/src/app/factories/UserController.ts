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

const repository = new UserPostgresqlRepository()

export const makeUserCreatorController = (): Controller => {
  const creator = new UserCreatorService(repository)

  return new UserCreatorController(creator)
}

export const makeUserLoaderController = (): Controller => {
  const loader = new UserLoaderService(repository)

  return new UserLoaderController(loader)
}

export const makeUsersCollectionLoaderController = (): Controller => {
  const loader = new UsersCollectionLoaderService(repository)

  return new UsersCollectionLoaderController(loader)
}

export const makeUserUpdaterController = (): Controller => {
  const updater = new UserUpdaterService(repository)

  return new UserUpdaterController(updater)
}

export const makeUserRemoverController = (): Controller => {
  const remover = new UserRemoverService(repository)

  return new UserRemoverController(remover)
}

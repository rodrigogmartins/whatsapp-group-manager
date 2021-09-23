import { Controller } from '@/view/interfaces'
import { GroupPostgresqlRepository } from '@/infra/repository'
import {
  GroupCreatorController,
  GroupLoaderController,
  GroupsCollectionLoaderController,
  GroupUpdaterController,
  GroupRemoverController
} from '@/view/controllers'
import {
  GroupCreatorService,
  GroupLoaderService,
  GroupRemoverService,
  GroupsCollectionLoaderService,
  GroupUpdaterService
} from '@/data/services'
import { GroupRepository } from '@/data/interfaces'

export const makeGroupController = () => {
  const repository = new GroupPostgresqlRepository()

  return {
    creator: () => makeGroupCreatorController(repository),
    loader: () => makeGroupLoaderController(repository),
    collectionLoader: () => makeGroupsCollectionLoaderController(repository),
    updater: () => makeGroupUpdaterController(repository),
    remover: () => makeGroupRemoverController(repository)
  }
}

const makeGroupCreatorController = (
  repository: GroupRepository
): Controller => {
  const creator = new GroupCreatorService(repository)

  return new GroupCreatorController(creator)
}

const makeGroupLoaderController = (repository: GroupRepository): Controller => {
  const loader = new GroupLoaderService(repository)

  return new GroupLoaderController(loader)
}

const makeGroupsCollectionLoaderController = (
  repository: GroupRepository
): Controller => {
  const loader = new GroupsCollectionLoaderService(repository)

  return new GroupsCollectionLoaderController(loader)
}

const makeGroupUpdaterController = (
  repository: GroupRepository
): Controller => {
  const updater = new GroupUpdaterService(repository)

  return new GroupUpdaterController(updater)
}

const makeGroupRemoverController = (
  repository: GroupRepository
): Controller => {
  const remover = new GroupRemoverService(repository)

  return new GroupRemoverController(remover)
}

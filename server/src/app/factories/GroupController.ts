import { Controller } from '@/view/interfaces'
import {
  GroupCreatorController,
  GroupLoaderController,
  GroupsCollectionLoaderController,
  GroupUpdaterController,
  GroupRemoverController
} from '@/view/controllers/Group'
import { GroupPostgresqlRepository } from '@/infra/repository/Group'
import { GroupRepository } from '@/domain/Group'
import { GroupCreatorHandler } from '@/domain/Group/GroupCreator'
import { GroupLoaderHandler } from '@/domain/Group/GroupLoader'
import { GroupsCollectionLoaderHandler } from '@/domain/Group/GroupsCollectionLoader'
import { GroupUpdaterHandler } from '@/domain/Group/GroupUpdater'
import { GroupRemoverHandler } from '@/domain/Group/GroupRemover'
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
  const creator = new GroupCreatorHandler(repository)

  return new GroupCreatorController(creator)
}

const makeGroupLoaderController = (repository: GroupRepository): Controller => {
  const loader = new GroupLoaderHandler(repository)

  return new GroupLoaderController(loader)
}

const makeGroupsCollectionLoaderController = (
  repository: GroupRepository
): Controller => {
  const loader = new GroupsCollectionLoaderHandler(repository)

  return new GroupsCollectionLoaderController(loader)
}

const makeGroupUpdaterController = (
  repository: GroupRepository
): Controller => {
  const updater = new GroupUpdaterHandler(repository)

  return new GroupUpdaterController(updater)
}

const makeGroupRemoverController = (
  repository: GroupRepository
): Controller => {
  const remover = new GroupRemoverHandler(repository)

  return new GroupRemoverController(remover)
}

import { Controller } from '@/view/interfaces'
import { LinkPostgresqlRepository } from '@/infra/repository'
import {
  LinkCreatorController,
  LinkLoaderController,
  LinksCollectionLoaderController,
  LinkUpdaterController,
  LinkRemoverController
} from '@/view/controllers'
import {
  LinkCreatorService,
  LinkLoaderService,
  LinkRemoverService,
  LinksCollectionLoaderService,
  LinkUpdaterService
} from '@/data/services'
import { LinkRepository } from '@/data/interfaces'

export const makeLinkController = () => {
  const repository = new LinkPostgresqlRepository()

  return {
    creator: () => makeLinkCreatorController(repository),
    loader: () => makeLinkLoaderController(repository),
    collectionLoader: () => makeLinksCollectionLoaderController(repository),
    updater: () => makeLinkUpdaterController(repository),
    remover: () => makeLinkRemoverController(repository)
  }
}

const makeLinkCreatorController = (repository: LinkRepository): Controller => {
  const creator = new LinkCreatorService(repository)

  return new LinkCreatorController(creator)
}

const makeLinkLoaderController = (repository: LinkRepository): Controller => {
  const loader = new LinkLoaderService(repository)

  return new LinkLoaderController(loader)
}

const makeLinksCollectionLoaderController = (
  repository: LinkRepository
): Controller => {
  const loader = new LinksCollectionLoaderService(repository)

  return new LinksCollectionLoaderController(loader)
}

const makeLinkUpdaterController = (repository: LinkRepository): Controller => {
  const updater = new LinkUpdaterService(repository)

  return new LinkUpdaterController(updater)
}

const makeLinkRemoverController = (repository: LinkRepository): Controller => {
  const remover = new LinkRemoverService(repository)

  return new LinkRemoverController(remover)
}

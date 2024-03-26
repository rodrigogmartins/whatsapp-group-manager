import { Controller } from '@/view/interfaces'
import {
  LinkCreatorController,
  LinkLoaderController,
  LinksCollectionLoaderController,
  LinkUpdaterController,
  LinkRemoverController
} from '@/view/controllers/Link'
import { LinkPostgresqlRepository } from '@/infra/repository/Link'
import { LinkRepository } from '@/domain/Link'
import { LinkLoaderHandler } from '@/domain/Link/LinkLoader'
import { LinksCollectionLoaderHandler } from '@/domain/Link/LinksCollectionLoader'
import { LinkUpdaterHandler } from '@/domain/Link/LinkUpdater'
import { LinkRemoverHandler } from '@/domain/Link/LinkRemover'
import { LinkCreatorHandler } from '@/domain/Link/LinkCreator/LinkCreatorHandler'
import { LinkLoaderFromUrlSlugController } from '@/view/controllers/Link/LinkLoaderFromUrlSlug'

export const makeLinkController = () => {
  const repository = new LinkPostgresqlRepository()

  return {
    creator: () => makeLinkCreatorController(repository),
    loader: () => makeLinkLoaderController(repository),
    loaderFromUrlSlug: () => makeLinkLoaderFromUrlSlugController(repository),
    collectionLoader: () => makeLinksCollectionLoaderController(repository),
    updater: () => makeLinkUpdaterController(repository),
    remover: () => makeLinkRemoverController(repository)
  }
}

const makeLinkCreatorController = (repository: LinkRepository): Controller => {
  const creator = new LinkCreatorHandler(repository)

  return new LinkCreatorController(creator)
}

const makeLinkLoaderController = (repository: LinkRepository): Controller => {
  const loader = new LinkLoaderHandler(repository)

  return new LinkLoaderController(loader)
}

const makeLinkLoaderFromUrlSlugController = (
  repository: LinkRepository
): Controller => {
  const loader = new LinkLoaderHandler(repository)

  return new LinkLoaderFromUrlSlugController(loader)
}

const makeLinksCollectionLoaderController = (
  repository: LinkRepository
): Controller => {
  const loader = new LinksCollectionLoaderHandler(repository)

  return new LinksCollectionLoaderController(loader)
}

const makeLinkUpdaterController = (repository: LinkRepository): Controller => {
  const updater = new LinkUpdaterHandler(repository)

  return new LinkUpdaterController(updater)
}

const makeLinkRemoverController = (repository: LinkRepository): Controller => {
  const remover = new LinkRemoverHandler(repository)

  return new LinkRemoverController(remover)
}

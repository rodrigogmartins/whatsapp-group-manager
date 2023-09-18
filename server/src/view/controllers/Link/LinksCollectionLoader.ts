import { LinksCollectionLoader } from '@/domain/Link/LinksCollectionLoader'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { LinkViewModel } from '@/view/controllers/Link'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('LinksCollectionLoaderController.js')
export class LinksCollectionLoaderController implements Controller {
  constructor(private readonly linksCollectionLoader: LinksCollectionLoader) {}

  // TODO: Add pagination
  async handle(query: any, body: any): Promise<HttpResponse<LinkViewModel[]>> {
    try {
      log.info('Calling link collection loader')
      const links = await this.linksCollectionLoader.load()
      const viewLinks = LinkViewModel.mapCollection(links)
      log.info('Links loaded')

      return ok(viewLinks)
    } catch (error: any) {
      log.error('Error trying to load links', { error })
      return serverError(error)
    }
  }
}

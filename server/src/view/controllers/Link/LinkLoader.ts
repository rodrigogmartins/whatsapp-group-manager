import { LinkLoader } from '@/domain/Link/LinkLoader'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { LinkViewModel } from '@/view/controllers/Link'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('LinkLoaderController.js')

export class LinkLoaderController implements Controller {
  constructor(private readonly groupLoader: LinkLoader) {}

  async handle(query: any, body: any): Promise<HttpResponse<LinkViewModel>> {
    try {
      log.info('Calling load link', { linkId: query.id })
      const link = await this.groupLoader.load(query.id)
      const viewLink = LinkViewModel.map(link)
      log.info('Link loadded', { linkId: query.id, link: viewLink })

      return ok(viewLink)
    } catch (error: any) {
      log.error('Error trying to load link', { linkId: query.id, error })
      return serverError(error)
    }
  }
}

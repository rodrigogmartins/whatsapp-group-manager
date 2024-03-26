import { LinkLoaderFromUrlSlug } from '@/domain/Link/LinkLoaderFromUrlSlug'
import {
  Controller,
  HttpResponse,
  serverError,
  redirect
} from '@/view/interfaces'
import { LinkViewModel } from '@/view/controllers/Link'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('LinkLoaderController.js')

export class LinkLoaderFromUrlSlugController implements Controller {
  constructor(private readonly linkLoader: LinkLoaderFromUrlSlug) {}

  async handle(query: any, body: any): Promise<HttpResponse<LinkViewModel>> {
    try {
      log.info('Calling load link form slug', { urlSlug: query.urlSlug })
      const link = await this.linkLoader.load(query.urlSlug)
      const viewLink = LinkViewModel.map(link)
      log.info('Link loadded', { urlSlug: query.urlSlug, link: viewLink })

      return redirect(viewLink.url)
    } catch (error: any) {
      log.error('Error trying to load link from url', {
        urlSlug: query.urlSlug,
        error
      })
      return serverError(error)
    }
  }
}

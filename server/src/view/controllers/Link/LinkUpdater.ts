import { LinkUpdater, LinkUpdateCommand } from '@/domain/Link/LinkUpdater'
import { Controller, HttpResponse, ok, serverError } from '@/view/interfaces'
import { LinkViewModel } from '@/view/controllers/Link'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('LinkUpdaterController.js')

export class LinkUpdaterController implements Controller {
  constructor(private readonly linkUpdater: LinkUpdater) {}

  async handle(
    query: any,
    body: LinkUpdateCommand
  ): Promise<HttpResponse<LinkViewModel>> {
    try {
      log.info('Calling update link', { link: body })
      const link = await this.linkUpdater.update(body)
      const viewLink = LinkViewModel.map(link)
      log.info('Link updated', { link: viewLink })

      return ok(viewLink)
    } catch (error: any) {
      log.error('Error trying to update link', { link: body, error })
      return serverError(error)
    }
  }
}

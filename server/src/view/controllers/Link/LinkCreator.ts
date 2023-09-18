import { LinkCreator, LinkCreatorCommand } from '@/domain/Link/LinkCreator'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { LinkViewModel } from '@/view/controllers/Link'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('LinkCreatorController.js')

export class LinkCreatorController implements Controller {
  constructor(private readonly linkCreator: LinkCreator) {}

  async handle(
    query: any,
    body: LinkCreatorCommand
  ): Promise<HttpResponse<LinkViewModel>> {
    try {
      log.info('Calling create link', { link: body })
      const link = await this.linkCreator.create(body)
      const viewLink = LinkViewModel.map(link)
      log.info('Link created', { link: viewLink })

      return created(viewLink)
    } catch (error: any) {
      log.error('Error trying to create link', { link: body, error })
      return serverError(error)
    }
  }
}

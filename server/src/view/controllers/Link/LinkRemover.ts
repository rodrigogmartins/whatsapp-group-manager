import { LinkRemover } from '@/domain/Link/LinkRemover'
import { LoggerAdapter } from '@/infra/adapters/Logger'
import {
  Controller,
  HttpResponse,
  serverError,
  noContent
} from '@/view/interfaces'

const log = LoggerAdapter.createLogFor('LinkRemoverController.js')

export class LinkRemoverController implements Controller {
  constructor(private readonly linkRemover: LinkRemover) {}

  async handle(query: any, body: any): Promise<HttpResponse<void>> {
    try {
      log.info('Calling remove link', { linkId: query.id })
      await this.linkRemover.remove(query.id)
      log.info('Link removed', { linkId: query.id })

      return noContent()
    } catch (error: any) {
      log.error('Error trying to remove link', { linkId: query.id, error })
      return serverError(error)
    }
  }
}

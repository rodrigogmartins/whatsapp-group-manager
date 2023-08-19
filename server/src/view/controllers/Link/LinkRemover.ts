import { LinkRemover } from '@/domain/Link/LinkRemover'
import {
  Controller,
  HttpResponse,
  serverError,
  noContent
} from '@/view/interfaces'

export class LinkRemoverController implements Controller {
  constructor(private readonly linkRemover: LinkRemover) {}

  async handle(query: any, body: any): Promise<HttpResponse<void>> {
    try {
      await this.linkRemover.remove(query.id)

      return noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}

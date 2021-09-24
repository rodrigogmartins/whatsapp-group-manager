import { LinkCreator } from '@/domain/usecases'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { LinkViewModel } from '@/view/view-models'

export class LinkCreatorController implements Controller {
  constructor (private readonly linkCreator: LinkCreator) {}

  async handle (query: any, body: any): Promise<HttpResponse<LinkViewModel>> {
    try {
      const link = await this.linkCreator.create(body)
      const viewLink = LinkViewModel.map(link)

      return created(viewLink)
    } catch (error: any) {
      return serverError(error)
    }
  }
}

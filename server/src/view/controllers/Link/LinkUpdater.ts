import { LinkUpdater } from '@/domain/Link/usecases'
import { Controller, HttpResponse, ok, serverError } from '@/view/interfaces'
import { LinkViewModel } from '@/view/view-models'

export class LinkUpdaterController implements Controller {
  constructor(private readonly linkUpdater: LinkUpdater) {}

  async handle(query: any, body: any): Promise<HttpResponse<LinkViewModel>> {
    try {
      const link = await this.linkUpdater.update(body)
      const viewLink = LinkViewModel.map(link)

      return ok(viewLink)
    } catch (error: any) {
      return serverError(error)
    }
  }
}

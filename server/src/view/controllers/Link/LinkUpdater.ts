import { LinkUpdater, LinkUpdateCommand } from '@/domain/Link/LinkUpdater'
import { Controller, HttpResponse, ok, serverError } from '@/view/interfaces'
import { LinkViewModel } from '@/view/controllers/Link'

export class LinkUpdaterController implements Controller {
  constructor(private readonly linkUpdater: LinkUpdater) {}

  async handle(
    query: any,
    body: LinkUpdateCommand
  ): Promise<HttpResponse<LinkViewModel>> {
    try {
      const link = await this.linkUpdater.update(body)
      const viewLink = LinkViewModel.map(link)

      return ok(viewLink)
    } catch (error: any) {
      return serverError(error)
    }
  }
}

import { LinkLoader } from '@/domain/Link/LinkLoader'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { LinkViewModel } from '@/view/controllers/Link'

export class LinkLoaderController implements Controller {
  constructor(private readonly groupLoader: LinkLoader) {}

  async handle(query: any, body: any): Promise<HttpResponse<LinkViewModel>> {
    try {
      const link = await this.groupLoader.load(query.id)
      const viewLink = LinkViewModel.map(link)

      return ok(viewLink)
    } catch (error: any) {
      return serverError(error)
    }
  }
}

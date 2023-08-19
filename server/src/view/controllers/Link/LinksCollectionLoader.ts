import { LinksCollectionLoader } from '@/domain/Link/LinksCollectionLoader'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { LinkViewModel } from '@/view/controllers/Link'

export class LinksCollectionLoaderController implements Controller {
  constructor(private readonly linksCollectionLoader: LinksCollectionLoader) {}

  async handle(query: any, body: any): Promise<HttpResponse<LinkViewModel[]>> {
    try {
      const links = await this.linksCollectionLoader.load()
      const viewLinks = LinkViewModel.mapCollection(links)

      return ok(viewLinks)
    } catch (error: any) {
      return serverError(error)
    }
  }
}

import { Link, LinkRepository } from '@/domain/Link'
import { LinksCollectionLoader } from '@/domain/Link/LinksCollectionLoader'

export class LinksCollectionLoaderHandler implements LinksCollectionLoader {
  constructor(private readonly linkRepository: LinkRepository) {}

  async load(): Promise<Link[]> {
    return this.linkRepository.getCollection()
  }
}

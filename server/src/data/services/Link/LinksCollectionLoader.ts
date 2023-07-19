import { Link } from '@/domain/entities'
import { LinksCollectionLoader } from '@/domain/Link/usecases'
import { LinkRepository } from '@/data/interfaces'

export class LinksCollectionLoaderService implements LinksCollectionLoader {
  constructor(private readonly linkRepository: LinkRepository) {}

  async load(): Promise<Link[]> {
    return this.linkRepository.getCollection()
  }
}

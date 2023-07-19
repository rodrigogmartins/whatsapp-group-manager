import { Link } from '@/domain/entities'
import { LinkLoader } from '@/domain/Link/usecases'
import { LinkRepository } from '@/data/interfaces'

export class LinkLoaderService implements LinkLoader {
  constructor(private readonly linkRepository: LinkRepository) {}

  async load(linkId: string): Promise<Link> {
    return this.linkRepository.get(linkId)
  }
}

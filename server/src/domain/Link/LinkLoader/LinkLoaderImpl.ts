import { Link, LinkRepository } from '@/domain/Link'
import { LinkLoader } from '@/domain/Link/LinkLoader'

export class LinkLoaderService implements LinkLoader {
  constructor(private readonly linkRepository: LinkRepository) {}

  async load(linkId: string): Promise<Link> {
    return this.linkRepository.get(linkId)
  }
}

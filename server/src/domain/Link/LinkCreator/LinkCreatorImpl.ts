import { Link, LinkRepository } from '@/domain/Link'
import { LinkCreator, LinkCreatorCommand } from '@/domain/Link/LinkCreator'

import { v4 as UUID } from 'uuid'

export class LinkCreatorService implements LinkCreator {
  constructor(private readonly linkRepository: LinkRepository) {}

  async create(link: LinkCreatorCommand): Promise<Link> {
    const linkId: string = UUID()
    const newLink: Link = new Link(
      linkId,
      link.url,
      link.clicks,
      link.clicksLimit,
      link.platform,
      link.groupId
    )

    return this.linkRepository.create(newLink)
  }
}

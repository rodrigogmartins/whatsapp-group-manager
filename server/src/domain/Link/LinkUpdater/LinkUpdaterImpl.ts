import { Link, LinkRepository } from '@/domain/Link'
import { LinkUpdater, LinkUpdateCommand } from '@/domain/Link/LinkUpdater'

export class LinkUpdaterService implements LinkUpdater {
  constructor(private readonly linkRepository: LinkRepository) {}

  async update(link: LinkUpdateCommand): Promise<Link> {
    const updatedLink: Link = new Link(
      link.id,
      link.url,
      link.clicks,
      link.clicksLimit,
      link.platform,
      link.groupId
    )

    return this.linkRepository.update(updatedLink)
  }
}

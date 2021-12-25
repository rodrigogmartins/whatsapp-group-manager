import { Link } from '@/domain/entities'
import { LinkUpdater } from '@/domain/usecases'
import { LinkUpdateInput, LinkRepository } from '@/data/interfaces'

export class LinkUpdaterService implements LinkUpdater {
  constructor(private readonly linkRepository: LinkRepository) {}

  async update(link: LinkUpdateInput): Promise<Link> {
    const linkPostgres = {
      id: link.id,
      url: link.url,
      clicks: link.clicks,
      clicksLimit: link.clicksLimit,
      platform: link.platform,
      groupId: link.groupId
    }

    return this.linkRepository.update(linkPostgres)
  }
}

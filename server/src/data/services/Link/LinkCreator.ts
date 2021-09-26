import { Link } from '@/domain/entities'
import { LinkCreator } from '@/domain/usecases'
import { LinkInput, LinkRepository } from '@/data/interfaces'

export class LinkCreatorService implements LinkCreator {
  constructor (private readonly linkRepository: LinkRepository) {}

  async create (link: LinkInput): Promise<Link> {
    // Validações
    const linkPostgres = {
      id: link.id,
      url: link.url,
      clicks: link.clicks,
      clicks_limit: link.clicksLimit,
      platform: link.platform,
      group_id: link.groupId
    }

    return this.linkRepository.create(linkPostgres)
  }
}

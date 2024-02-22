import { Link, LinkRepository } from '@/domain/Link'
import { LinkCreator, LinkCreatorCommand } from '@/domain/Link/LinkCreator'

import { v4 as UUID } from 'uuid'

export class LinkCreatorHandler implements LinkCreator {
  constructor(private readonly linkRepository: LinkRepository) {}

  async create(link: LinkCreatorCommand): Promise<Link> {
    const linkId: string = UUID()
    const clicksLimit = this.getWhatsappGroupPeopleLimit()
    const newLink: Link = new Link(
      linkId,
      link.url,
      link.clicks,
      clicksLimit,
      link.platform,
      link.groupId
    )

    return this.linkRepository.create(newLink)
  }

  getWhatsappGroupPeopleLimit(): number {
    return parseInt(process.env.WHATSAPP_GROUP_PEOPLE_LIMIT || '100')
  }
}

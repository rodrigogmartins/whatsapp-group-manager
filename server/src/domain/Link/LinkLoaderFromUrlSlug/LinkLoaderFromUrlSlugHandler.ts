import { GroupRepository } from '@/domain/Group'
import { Link, LinkRepository } from '@/domain/Link'
import { LinkLoader } from '@/domain/Link/LinkLoader'

export class LinkLoaderHandler implements LinkLoader {
  constructor(
    private readonly linkRepository: LinkRepository,
    private readonly groupRepository: GroupRepository
  ) {}

  async load(urlSlug: string): Promise<Link> {
    const group = await this.groupRepository.getFromSlug(urlSlug)
    const link = await this.linkRepository.getGroupLinkToJoin(group.id)
    const updatedLink = { ...link, clicks: link.clicks + 1 } as Link
    await this.linkRepository.update(updatedLink)

    return link
  }
}

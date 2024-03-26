import { Link, LinkRepository } from '@/domain/Link'
import { LinkLoaderFromUrlSlug } from '@/domain/Link/LinkLoaderFromUrlSlug'

export class LinkLoaderFromUrlSlugHandler implements LinkLoaderFromUrlSlug {
  constructor(private readonly linkRepository: LinkRepository) {}

  async load(urlSlug: string): Promise<Link> {
    const link = await this.linkRepository.getGroupLinkToJoin(urlSlug)
    const updatedLink = { ...link, clicks: link.clicks + 1 } as Link
    await this.linkRepository.update(updatedLink)

    return link
  }
}

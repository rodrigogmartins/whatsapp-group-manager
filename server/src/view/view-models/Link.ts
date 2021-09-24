import { Link } from '@/domain/entities'

export class LinkViewModel {
  id: string | undefined
  url: string | undefined
  clicks: number | undefined
  clicksLimit: number | undefined
  platform: string | undefined
  groupId: string | undefined
  createdAt: string | undefined
  updatedAt: string | undefined

  static map (link: Link): LinkViewModel {
    return {
      id: link.id,
      url: link.url,
      clicks: link.clicks,
      clicksLimit: link.clicksLimit,
      platform: link.platform,
      groupId: link.groupId,
      createdAt: link.createdAt.toISOString(),
      updatedAt: link.updatedAt.toISOString()
    }
  }

  static mapCollection (links: Link[]): LinkViewModel[] {
    return links.map((link) => LinkViewModel.map(link))
  }
}

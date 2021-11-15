import { Link } from '@/domain/entities'

export class LinkViewModel {
  constructor(
    readonly id: string,
    readonly url: string,
    readonly clicks: number,
    readonly clicksLimit: number,
    readonly platform: string,
    readonly groupId: string,
    readonly createdAt: string,
    readonly updatedAt: string
  ) {}

  static map(link: Link): LinkViewModel {
    return new LinkViewModel(
      link.id,
      link.url,
      link.clicks,
      link.clicksLimit,
      link.platform,
      link.groupId,
      link.createdAt.toISOString(),
      link.updatedAt.toISOString()
    )
  }

  static mapCollection(links: Link[]): LinkViewModel[] {
    return links.map((link) => LinkViewModel.map(link))
  }
}

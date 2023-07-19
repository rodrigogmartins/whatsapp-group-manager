import { Link } from '@/domain/Link'

export class LinkPostgresEntity {
  id!: string
  url!: string
  platform!: string
  clicks!: number
  clicks_limit!: number
  group_id!: string
  created_at!: Date
  updated_at!: Date

  static mapToEntity(link: LinkPostgresEntity): Link {
    return {
      id: link.id,
      url: link.url,
      platform: link.platform,
      clicks: link.clicks,
      clicksLimit: link.clicks_limit,
      groupId: link.group_id,
      createdAt: link.created_at,
      updatedAt: link.updated_at
    }
  }

  static mapCollectionToEntity(links: LinkPostgresEntity[]): Link[] {
    return links.map((link) => LinkPostgresEntity.mapToEntity(link))
  }
}

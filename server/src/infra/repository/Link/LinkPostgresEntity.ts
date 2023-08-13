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
    return new Link(
      link.id,
      link.url,
      link.clicks,
      link.clicks_limit,
      link.platform,
      link.group_id
    )
      .setCreatedAt(link.created_at)
      .setUpdatedAt(link.updated_at)
  }

  static mapCollectionToEntity(links: LinkPostgresEntity[]): Link[] {
    return links.map((link) => LinkPostgresEntity.mapToEntity(link))
  }
}

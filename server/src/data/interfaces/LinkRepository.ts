import { LinkModel } from '@/data/models'
import { Link } from '@/domain/entities'

export interface LinkRepository {
  get(linkId: string): Promise<LinkModel>
  getCollection(): Promise<LinkModel[]>
  create(link: LinkInputPostgres): Promise<LinkModel>
  update(link: LinkUpdateInputPostgres): Promise<LinkModel>
  delete(linkId: string): void
}

export type LinkInput = {
  id: string
  url: string
  clicks: number
  clicksLimit: number
  platform: string
  groupId: string
}

export type LinkUpdateInput = {
  id: string
  url?: string
  clicks?: number
  clicksLimit?: number
  platform?: string
  groupId?: string
}

export type LinkInputPostgres = {
  id: string
  url: string
  platform: string
  clicks: number
  clicks_limit: number
  group_id: string
}

export type LinkUpdateInputPostgres = {
  id: string
  url?: string
  platform?: string
  clicks?: number
  clicks_limit?: number
  group_id?: string
}

export class LinkPostgres {
  id!: string
  url!: string
  platform!: string
  clicks!: number
  clicks_limit!: number
  group_id!: string
  created_at!: Date
  updated_at!: Date

  static mapToEntity (link: LinkPostgres): Link {
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

  static mapCollectionToEntity (links: LinkPostgres[]): Link[] {
    return links.map((link) => LinkPostgres.mapToEntity(link))
  }
}

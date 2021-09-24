import { LinkRepository, LinkInput } from '@/data/interfaces'
import { Link } from '@/domain/entities'
import knex from '@/infra/database/knex'

export class LinkPostgresqlRepository implements LinkRepository {
  async get (linkId: string): Promise<Link> {
    const link: Link = await knex('links')
      .where({ id: linkId })
      .first()

    return {
      id: link.id,
      url: link.url,
      clicks: link.clicks,
      clicksLimit: link.clicksLimit,
      platform: link.platform,
      groupId: link.groupId,
      createdAt: link.createdAt,
      updatedAt: link.updatedAt
    }
  }

  async getCollection (): Promise<Link[]> {
    const links: Link[] = await knex('links')

    return links.map((link) => ({
      id: link.id,
      url: link.url,
      clicks: link.clicks,
      clicksLimit: link.clicksLimit,
      platform: link.platform,
      groupId: link.groupId,
      createdAt: new Date(link.createdAt),
      updatedAt: new Date(link.updatedAt)
    }))
  }

  async create (link: LinkInput): Promise<Link> {
    const knexLink = {
      id: link.id,
      url: link.url,
      clicks: link.clicks,
      clicksLimit: link.clicksLimit,
      platform: link.platform,
      groupId: link.groupId
    }

    const [createdAt, updatedAt] = await knex('links')
      .insert(knexLink)
      .returning('createdAt')
      .returning('updatedAt')

    return {
      id: link.id,
      url: link.url,
      clicks: link.clicks,
      clicksLimit: link.clicksLimit,
      platform: link.platform,
      groupId: link.groupId,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt)
    }
  }

  async update (link: LinkInput): Promise<Link> {
    await knex('links')
      .update(link)
      .where({ id: link.id })

    const updatedLink: Link = await this.get(link.id)

    return {
      id: updatedLink.id,
      url: updatedLink.url,
      clicks: updatedLink.clicks,
      clicksLimit: updatedLink.clicksLimit,
      platform: updatedLink.platform,
      groupId: updatedLink.groupId,
      createdAt: new Date(updatedLink.createdAt),
      updatedAt: new Date(updatedLink.updatedAt)
    }
  }

  async delete (linkId: string): Promise<void> {
    await knex('links')
      .where({ id: linkId })
      .del()
  }
}

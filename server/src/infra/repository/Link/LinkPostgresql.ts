import { Link, LinkRepository } from '@/domain/Link'
import { LinkPostgresEntity } from '@/infra/repository/Link'
import knex from '@/infra/database/knex'

export class LinkPostgresqlRepository implements LinkRepository {
  async get(linkId: string): Promise<Link> {
    const link: LinkPostgresEntity = await knex('links')
      .where({ id: linkId })
      .first()

    return LinkPostgresEntity.mapToEntity(link)
  }

  async getGroupLinkToJoin(groupId: string): Promise<Link> {
    const link: LinkPostgresEntity = await knex('links')
      .where({ group_id: groupId })
      .andWhere(knex.raw('(clicks + 1) <= clicks_limit'))
      .first()

    return LinkPostgresEntity.mapToEntity(link)
  }

  async getCollection(): Promise<Link[]> {
    const links: LinkPostgresEntity[] = await knex('links')

    return LinkPostgresEntity.mapCollectionToEntity(links)
  }

  async create(link: Link): Promise<Link> {
    await knex('links').insert(link)

    return await this.get(link.id)
  }

  async update(link: Link): Promise<Link> {
    await knex('links').update(link).where({ id: link.id })

    return await this.get(link.id)
  }

  async delete(linkId: string): Promise<void> {
    await knex('links').where({ id: linkId }).del()
  }
}

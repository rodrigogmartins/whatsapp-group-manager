import {
  LinkRepository,
  LinkPostgres,
  LinkInputPostgres,
  LinkUpdateInputPostgres
} from '@/data/interfaces'
import { Link } from '@/domain/entities'
import knex from '@/infra/database/knex'

export class LinkPostgresqlRepository implements LinkRepository {
  async get (linkId: string): Promise<Link> {
    const link: LinkPostgres = await knex('links')
      .where({ id: linkId })
      .first()

    return LinkPostgres.mapToEntity(link)
  }

  async getCollection (): Promise<Link[]> {
    const links: LinkPostgres[] = await knex('links')

    return LinkPostgres.mapCollectionToEntity(links)
  }

  async create (link: LinkInputPostgres): Promise<Link> {
    await knex('links').insert(link)

    return await this.get(link.id)
  }

  async update (link: LinkUpdateInputPostgres): Promise<Link> {
    await knex('links')
      .update(link)
      .where({ id: link.id })

    return await this.get(link.id)
  }

  async delete (linkId: string): Promise<void> {
    await knex('links')
      .where({ id: linkId })
      .del()
  }
}

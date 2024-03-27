import { Group, GroupRepository } from '@/domain/Group'
import { GroupPostgres } from '@/infra/repository/Group'
import knex from '@/infra/database/knex'

export class GroupPostgresqlRepository implements GroupRepository {
  async get(groupId: string): Promise<Group> {
    const group: GroupPostgres = await knex('groups')
      .where({ id: groupId })
      .first()

    return GroupPostgres.mapToEntity(group)
  }

  async getCollection(): Promise<Group[]> {
    const groups: GroupPostgres[] = await knex('groups')

    return GroupPostgres.mapCollectionToEntity(groups)
  }

  async create(group: Group): Promise<Group> {
    const groupForDatabase = {
      id: group.id,
      name: group.name,
      url_slug: group.urlSlug
    }

    await knex('groups').insert(groupForDatabase)

    return await this.get(groupForDatabase.id)
  }

  async update(group: Group): Promise<Group> {
    const groupForDatabase = {
      id: group.id,
      name: group.name,
      url_slug: group.urlSlug
    }

    await knex('groups')
      .update(groupForDatabase)
      .where({ id: groupForDatabase.id })

    return await this.get(groupForDatabase.id)
  }

  async delete(groupId: string): Promise<void> {
    await knex('groups').where({ id: groupId }).del()
  }
}

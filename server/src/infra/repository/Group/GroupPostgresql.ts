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
    await knex('groups').insert(group)

    return await this.get(group.id)
  }

  async update(group: Group): Promise<Group> {
    await knex('groups').update(group).where({ id: group.id })

    return await this.get(group.id)
  }

  async delete(groupId: string): Promise<void> {
    await knex('groups').where({ id: groupId }).del()
  }
}

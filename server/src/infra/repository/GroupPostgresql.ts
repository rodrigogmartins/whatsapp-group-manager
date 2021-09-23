import { GroupRepository, GroupInput } from '@/data/interfaces'
import { Group } from '@/domain/entities'
import knex from '@/infra/database/knex'

export class GroupPostgresqlRepository implements GroupRepository {
  async get (groupId: string): Promise<Group> {
    const group: Group = await knex('groups')
      .where({ id: groupId })
      .first()

    return {
      id: group.id,
      name: group.name,
      creatorId: group.creatorId,
      urlSlug: group.urlSlug,
      createdAt: new Date(group.createdAt),
      updatedAt: new Date(group.updatedAt)
    }
  }

  async getCollection (): Promise<Group[]> {
    const groups: Group[] = await knex('groups')

    return groups.map((group) => ({
      id: group.id,
      name: group.name,
      creatorId: group.creatorId,
      urlSlug: group.urlSlug,
      createdAt: new Date(group.createdAt),
      updatedAt: new Date(group.updatedAt)
    }))
  }

  async create (group: GroupInput): Promise<Group> {
    const knexGroup = {
      id: group.id,
      name: group.name,
      urlSlug: group.urlSlug
    }

    const [createdAt, updatedAt] = await knex('groups')
      .insert(knexGroup)
      .returning('createdAt')
      .returning('updatedAt')

    return {
      id: group.id,
      name: group.name,
      creatorId: group.creatorId || '',
      urlSlug: group.urlSlug,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt)
    }
  }

  async update (group: GroupInput): Promise<Group> {
    await knex('groups')
      .update(group)
      .where({ id: group.id })

    const updatedGroup: Group = await this.get(group.id)

    return {
      id: updatedGroup.id,
      name: updatedGroup.name,
      urlSlug: updatedGroup.urlSlug,
      creatorId: updatedGroup.creatorId,
      createdAt: new Date(updatedGroup.createdAt),
      updatedAt: new Date(updatedGroup.updatedAt)
    }
  }

  async delete (groupId: string): Promise<void> {
    await knex('groups')
      .where({ id: groupId })
      .del()
  }
}

import { GroupModel } from '@/data/models'
import { Group } from '@/domain/entities'

export interface GroupRepository {
  get(groupId: string): Promise<GroupModel>
  getCollection(): Promise<GroupModel[]>
  create(group: GroupInputPostgres): Promise<GroupModel>
  update(group: GroupUpdateInputPostgres): Promise<GroupModel>
  delete(groupId: string): void
}

export type GroupInput = {
  id: string
  name: string
  urlSlug: string
  creatorId: string
}

export type GroupUpdateInput = {
  id: string
  name?: string
  urlSlug?: string
  creatorId?: string
}

export type GroupInputPostgres = {
  id: string
  name: string
  url_slug: string
  creator_id: string
}

export type GroupUpdateInputPostgres = {
  id: string
  name?: string
  url_slug?: string
  creator_id?: string
}
export class GroupPostgres {
  id!: string
  name!: string
  url_slug!: string
  creator_id!: string
  created_at!: Date
  updated_at!: Date

  static mapToEntity (group: GroupPostgres): Group {
    return {
      id: group.id,
      name: group.name,
      urlSlug: group.url_slug,
      creatorId: group.creator_id,
      createdAt: group.created_at,
      updatedAt: group.updated_at
    }
  }

  static mapCollectionToEntity (groups: GroupPostgres[]): Group[] {
    return groups.map((group) => GroupPostgres.mapToEntity(group))
  }
}

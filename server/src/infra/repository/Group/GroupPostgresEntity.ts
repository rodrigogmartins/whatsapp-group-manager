import { Group } from '@/domain/Group'

export class GroupPostgres {
  id!: string
  name!: string
  url_slug!: string
  creator_id!: string
  created_at!: Date
  updated_at!: Date

  static mapToEntity(group: GroupPostgres): Group {
    return {
      id: group.id,
      name: group.name,
      urlSlug: group.url_slug,
      creatorId: group.creator_id,
      createdAt: group.created_at,
      updatedAt: group.updated_at
    }
  }

  static mapCollectionToEntity(groups: GroupPostgres[]): Group[] {
    return groups.map((group) => GroupPostgres.mapToEntity(group))
  }
}

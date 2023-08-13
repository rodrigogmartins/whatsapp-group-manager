import { Group } from '@/domain/Group'

export class GroupPostgres {
  id!: string
  name!: string
  url_slug!: string
  creator_id!: string
  created_at!: Date
  updated_at!: Date

  static mapToEntity(group: GroupPostgres): Group {
    return new Group(group.id, group.name, group.url_slug, group.creator_id)
      .setCreatedAt(group.created_at)
      .setUpdatedAt(group.updated_at)
  }

  static mapCollectionToEntity(groups: GroupPostgres[]): Group[] {
    return groups.map((group) => GroupPostgres.mapToEntity(group))
  }
}

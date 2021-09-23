import { Group } from '@/domain/entities'

export class GroupViewModel {
  id: string | undefined
  name: string | undefined
  creatorId: string | undefined
  urlSlug: string | undefined
  createdAt: string | undefined
  updatedAt: string | undefined

  static map (group: Group): GroupViewModel {
    return {
      id: group.id,
      name: group.name,
      creatorId: group.creatorId,
      urlSlug: group.urlSlug,
      createdAt: group.createdAt.toISOString(),
      updatedAt: group.updatedAt.toISOString()
    }
  }

  static mapCollection (groups: Group[]): GroupViewModel[] {
    return groups.map((group) => GroupViewModel.map(group))
  }
}

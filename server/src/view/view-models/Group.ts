import { Group } from '@/domain/entities'

export class GroupViewModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly creatorId: string,
    readonly urlSlug: string,
    readonly createdAt: string,
    readonly updatedAt: string
  ) {}

  static map(group: Group): GroupViewModel {
    return new GroupViewModel(
      group.id,
      group.name,
      group.creatorId,
      group.urlSlug,
      group.createdAt.toISOString(),
      group.updatedAt.toISOString()
    )
  }

  static mapCollection(groups: Group[]): GroupViewModel[] {
    return groups.map((group) => GroupViewModel.map(group))
  }
}

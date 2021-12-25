import { Group } from '@/domain/entities'
import { GroupUpdater } from '@/domain/usecases'
import { GroupUpdateInput, GroupRepository } from '@/data/interfaces'

export class GroupUpdaterService implements GroupUpdater {
  constructor(private readonly groupRepository: GroupRepository) {}

  async update(group: GroupUpdateInput): Promise<Group> {
    const groupPostgres = {
      id: group.id,
      name: group.name,
      url_slug: group.urlSlug,
      creator_id: group.creatorId
    }

    return this.groupRepository.update(groupPostgres)
  }
}

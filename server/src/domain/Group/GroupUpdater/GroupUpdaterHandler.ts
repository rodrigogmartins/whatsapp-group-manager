import { Group, GroupRepository } from '@/domain/Group'
import { GroupUpdater, GroupUpdaterCommand } from '@/domain/Group/GroupUpdater'

export class GroupUpdaterHandler implements GroupUpdater {
  constructor(private readonly groupRepository: GroupRepository) {}

  async update(group: GroupUpdaterCommand): Promise<Group> {
    const updatedGroup = new Group(group.id, group.name, group.urlSlug)

    return this.groupRepository.update(updatedGroup)
  }
}

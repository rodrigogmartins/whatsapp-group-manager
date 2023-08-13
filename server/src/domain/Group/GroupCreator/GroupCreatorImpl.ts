import { Group, GroupRepository } from '@/domain/Group'
import { GroupCreator, GroupCreatorCommand } from '@/domain/Group/GroupCreator'

export class GroupCreatorService implements GroupCreator {
  constructor(private readonly groupRepository: GroupRepository) {}

  async create(group: GroupCreatorCommand): Promise<Group> {
    const newGroup = new Group(
      group.id,
      group.name,
      group.creatorId,
      group.urlSlug
    )

    return this.groupRepository.create(newGroup)
  }
}

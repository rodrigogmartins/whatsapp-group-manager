import { Group, GroupRepository } from '@/domain/Group'
import { GroupCreator, GroupCreatorCommand } from '@/domain/Group/GroupCreator'

import { v4 as UUID } from 'uuid'

export class GroupCreatorHandler implements GroupCreator {
  constructor(private readonly groupRepository: GroupRepository) {}

  async create(group: GroupCreatorCommand): Promise<Group> {
    const groupId: string = UUID()

    const newGroup = new Group(groupId, group.name, group.urlSlug)

    return this.groupRepository.create(newGroup)
  }
}

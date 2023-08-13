import { Group, GroupRepository } from '@/domain/Group'
import { GroupLoader } from '@/domain/Group/GroupLoader'

export class GroupLoaderService implements GroupLoader {
  constructor(private readonly groupRepository: GroupRepository) {}

  async load(groupId: string): Promise<Group> {
    return this.groupRepository.get(groupId)
  }
}

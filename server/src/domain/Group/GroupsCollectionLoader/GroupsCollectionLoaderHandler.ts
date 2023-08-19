import { Group, GroupRepository } from '@/domain/Group'
import { GroupsCollectionLoader } from '@/domain/Group/GroupsCollectionLoader'

export class GroupsCollectionLoaderHandler implements GroupsCollectionLoader {
  constructor(private readonly groupRepository: GroupRepository) {}

  async load(): Promise<Group[]> {
    return this.groupRepository.getCollection()
  }
}

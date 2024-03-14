import { Group, GroupRepository } from '@/domain/Group'
import { GroupLoaderFromSlug } from '@/domain/Group/GroupLoaderFromSlug'

export class GroupLoaderFromSlugHandler implements GroupLoaderFromSlug {
  constructor(private readonly groupRepository: GroupRepository) {}

  async load(urlSlug: string): Promise<Group> {
    return this.groupRepository.getFromSlug(urlSlug)
  }
}

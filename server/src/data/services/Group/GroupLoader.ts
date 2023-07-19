import { Group } from '@/domain/entities'
import { GroupLoader } from '@/domain/Group/usecases'
import { GroupRepository } from '@/data/interfaces'

export class GroupLoaderService implements GroupLoader {
  constructor(private readonly groupRepository: GroupRepository) {}

  async load(groupId: string): Promise<Group> {
    return this.groupRepository.get(groupId)
  }
}

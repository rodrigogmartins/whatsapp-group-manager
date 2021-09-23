import { Group } from '@/domain/entities'
import { GroupsCollectionLoader } from '@/domain/usecases'
import { GroupRepository } from '@/data/interfaces'

export class GroupsCollectionLoaderService implements GroupsCollectionLoader {
  constructor (private readonly groupRepository: GroupRepository) {}

  async load (): Promise<Group[]> {
    return this.groupRepository.getCollection()
  }
}

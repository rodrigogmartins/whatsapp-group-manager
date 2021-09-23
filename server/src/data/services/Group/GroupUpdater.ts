import { Group } from '@/domain/entities'
import { GroupUpdater } from '@/domain/usecases'
import { GroupInput, GroupRepository } from '@/data/interfaces'

export class GroupUpdaterService implements GroupUpdater {
  constructor (private readonly groupRepository: GroupRepository) {}

  async update (group: GroupInput): Promise<Group> {
    return this.groupRepository.update(group)
  }
}

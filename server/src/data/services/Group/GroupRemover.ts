import { GroupRemover } from '@/domain/usecases'
import { GroupRepository } from '@/data/interfaces'

export class GroupRemoverService implements GroupRemover {
  constructor (private readonly groupRepository: GroupRepository) {}

  async remove (userId: string): Promise<void> {
    this.groupRepository.delete(userId)
  }
}

import { GroupRepository } from '@/domain/Group'
import { GroupRemover } from '@/domain/Group/GroupRemover'

export class GroupRemoverHandler implements GroupRemover {
  constructor(private readonly groupRepository: GroupRepository) {}

  async remove(linkId: string): Promise<void> {
    this.groupRepository.delete(linkId)
  }
}

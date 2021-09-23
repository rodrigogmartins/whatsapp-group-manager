import { Group } from '@/domain/entities'
import { GroupCreator } from '@/domain/usecases'
import { GroupInput, GroupRepository } from '@/data/interfaces'

export class GroupCreatorService implements GroupCreator {
  constructor (private readonly groupRepository: GroupRepository) {}

  async create (group: GroupInput): Promise<Group> {
    // Validações

    /*
    const decoded: any = await verify(
      req.cookies.auth!,
      process.env.SECRET_KEY!
    )
    
    decoded.sub = creator.id
    */

    return this.groupRepository.create(group)
  }
}

import { Group } from '@/domain/Group'
import { GroupCreatorCommand } from '@/domain/Group/GroupCreator'

export interface GroupCreator {
  create: (group: GroupCreatorCommand) => Promise<Group>
}

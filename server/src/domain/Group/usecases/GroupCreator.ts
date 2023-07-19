import { GroupInput } from '@/data/interfaces'
import { Group } from '@/domain/Group'

export interface GroupCreator {
  create: (group: GroupInput) => Promise<Group>
}

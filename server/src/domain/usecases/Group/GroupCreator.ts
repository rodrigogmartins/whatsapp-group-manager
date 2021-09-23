import { GroupInput } from '@/data/interfaces'
import { Group } from '@/domain/entities'

export interface GroupCreator {
  create: (group: GroupInput) => Promise<Group>
}

import { GroupInput } from '@/data/interfaces'
import { Group } from '@/domain/entities'

export interface GroupUpdater {
  update: (group: GroupInput) => Promise<Group>
}

import { GroupUpdateInput } from '@/data/interfaces'
import { Group } from '@/domain/Group'

export interface GroupUpdater {
  update: (group: GroupUpdateInput) => Promise<Group>
}

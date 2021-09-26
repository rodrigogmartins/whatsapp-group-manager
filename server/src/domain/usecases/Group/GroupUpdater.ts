import { GroupUpdateInput } from '@/data/interfaces'
import { Group } from '@/domain/entities'

export interface GroupUpdater {
  update: (group: GroupUpdateInput) => Promise<Group>
}

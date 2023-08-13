import { Group } from '@/domain/Group'
import { GroupUpdaterCommand } from '@/domain/Group/GroupUpdater'

export interface GroupUpdater {
  update: (group: GroupUpdaterCommand) => Promise<Group>
}

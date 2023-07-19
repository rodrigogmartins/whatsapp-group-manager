import { Group } from '@/domain/Group'

export interface GroupLoader {
  load: (groupId: string) => Promise<Group>
}

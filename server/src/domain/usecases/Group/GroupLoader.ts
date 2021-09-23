import { Group } from '@/domain/entities'

export interface GroupLoader {
  load: (groupId: string) => Promise<Group>
}

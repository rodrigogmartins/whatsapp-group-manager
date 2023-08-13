import { Group } from '@/domain/Group'

export interface GroupsCollectionLoader {
  load: () => Promise<Group[]>
}

import { Group } from '@/domain/entities'

export interface GroupsCollectionLoader {
  load: () => Promise<Group[]>
}

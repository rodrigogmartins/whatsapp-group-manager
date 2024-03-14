import { Group } from '@/domain/Group'

export interface GroupLoaderFromSlug {
  load: (urlSlug: string) => Promise<Group>
}

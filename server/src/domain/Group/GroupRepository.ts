import { Group } from '@/domain/Group'

export interface GroupRepository {
  get(groupId: string): Promise<Group>
  getCollection(): Promise<Group[]>
  create(group: Group): Promise<Group>
  update(group: Group): Promise<Group>
  delete(groupId: string): void
}

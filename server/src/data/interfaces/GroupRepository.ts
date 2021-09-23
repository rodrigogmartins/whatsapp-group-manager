import { GroupModel } from '@/data/models'

export interface GroupRepository {
  get(groupId: string): Promise<GroupModel>
  getCollection(): Promise<GroupModel[]>
  create(group: GroupInput): Promise<GroupModel>
  update(group: GroupInput): Promise<GroupModel>
  delete(groupId: string): void
}

export type GroupInput = {
  id: string
  name: string
  urlSlug: string
  creatorId?: string
}

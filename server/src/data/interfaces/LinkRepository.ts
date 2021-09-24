import { LinkModel } from '@/data/models'

export interface LinkRepository {
  get(linkId: string): Promise<LinkModel>
  getCollection(): Promise<LinkModel[]>
  create(link: LinkInput): Promise<LinkModel>
  update(link: LinkInput): Promise<LinkModel>
  delete(linkId: string): void
}

export type LinkInput = {
  id: string
  url: string
  clicks: number
  clicksLimit: number
  platform: string
  groupId: string
}

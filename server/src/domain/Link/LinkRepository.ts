import { Link } from '@/domain/Link'

export interface LinkRepository {
  get(linkId: string): Promise<Link>
  getCollection(): Promise<Link[]>
  create(link: Link): Promise<Link>
  update(link: Link): Promise<Link>
  delete(linkId: string): void
}

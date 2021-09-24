import { Link } from '@/domain/entities'

export interface LinkLoader {
  load: (linkId: string) => Promise<Link>
}

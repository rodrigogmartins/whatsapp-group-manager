import { Link } from '@/domain/Link'

export interface LinkLoader {
  load: (linkId: string) => Promise<Link>
}

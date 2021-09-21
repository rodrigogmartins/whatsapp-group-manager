import { Link } from './Link'
import { User } from './User'

export type Group = {
  id: string
  name: string
  links: Link[]
  creator: User
  createdAt: Date
  updatedAt: Date
}

import { Access } from 'payload'
import { User } from 'payload-types'

export const isAdmin: Access<User> = ({ req: { user } }) => {
  if (!user) {
    return false
  }
  return Boolean(user.role === 'admin')
}

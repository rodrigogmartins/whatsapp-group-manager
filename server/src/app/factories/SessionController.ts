import { Controller } from '@/view/interfaces'
import { UserPostgresqlRepository } from '@/infra/repository'
import {
  SessionLogInController,
  SessionLogOutController
} from '@/view/controllers'
import { SessionLogInService, SessionLogOutService } from '@/data/services'
import { UserRepository } from '@/data/interfaces'

export const makeSessionController = () => {
  const repository = new UserPostgresqlRepository()

  return {
    logIn: () => makeSessionLogInController(repository),
    logOut: () => makeSessionLogOutController()
  }
}

const makeSessionLogInController = (repository: UserRepository): Controller => {
  const sessionService = new SessionLogInService(repository)

  return new SessionLogInController(sessionService)
}

const makeSessionLogOutController = (): Controller => {
  const sessionService = new SessionLogOutService()

  return new SessionLogOutController(sessionService)
}

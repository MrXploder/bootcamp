import Firebase from 'firebase'
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

import type { ICredentials, IUser } from './session.interface'

@Module({})
export default class SessionModule extends VuexModule {
  public user: IUser | null = null

  @Mutation
  public SET_USER(user: IUser) {
    this.user = user
  }

  @Action
  public signIn(credentials: ICredentials) {
    return new Promise<void>((resolve, reject) => {
      Firebase.auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((response) => {
          this.SET_USER({ email: response.user?.email ?? '' })
          resolve()
        }, reject)
    })
  }

  @Action
  public signUp(credentials: ICredentials) {
    return new Promise<void>((resolve, reject) => {
      Firebase.auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((response) => {
          this.SET_USER({ email: response.user?.email ?? '' })
          resolve()
        }, reject)
    })
  }
}

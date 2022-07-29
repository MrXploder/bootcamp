import Store from '@/store'

export function beforeEach(to, from, next) {
  const accessLevel = to.meta.accessLevel
  const isAdmin = Store.getters['session/isAdmin']
  if (accessLevel === 'user' || (accessLevel === 'admin' && isAdmin)) {
    next()
  } else {
    next('/')
  }
}

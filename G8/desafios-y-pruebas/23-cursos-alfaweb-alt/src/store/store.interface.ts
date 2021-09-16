export type XState = 'idle' | 'pending' | 'fulfilled' | 'rejected'

export interface XMachine<T = any> {
  data: T
  state: XState
}

export interface XMutationPayload {
  property: string
  with: any
}

export type XMutationTuple = [string, any]

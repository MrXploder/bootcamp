import { getFirestore } from 'firebase/firestore/lite'
import { app } from '@/plugins/firebase'
import { getAuth } from 'firebase/auth'

export const db = getFirestore(app)
export const auth = getAuth(app)

import { getFirestore } from 'firebase/firestore/lite'
import { app } from '@/plugins/firebase'

export const db = getFirestore(app)

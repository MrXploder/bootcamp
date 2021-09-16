import { FirestoreApp } from '@/plugins/firebase'

import type firebase from 'firebase'

export default class FirestoreService<T> {
  protected $db

  constructor(private readonly collection: string) {
    this.$db = FirestoreApp.collection(this.collection) as firebase.firestore.CollectionReference<T>
  }
}

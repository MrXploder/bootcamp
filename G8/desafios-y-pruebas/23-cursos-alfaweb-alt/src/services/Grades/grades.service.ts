import FirestoreService from '@/services/Firestore/firestore.service'

import type { IGrade } from './grades.interface'

export default new (class gradesService extends FirestoreService<Omit<IGrade, 'id'>> {
  constructor() {
    super('grades')
  }

  public fetchAll() {
    return new Promise<IGrade[]>((resolve, reject) => {
      this.$db.get().then((querySnapshot) => {
        const data: IGrade[] = []
        querySnapshot.forEach((document) =>
          data.push({
            id: document.id,
            ...(document.data() as Omit<IGrade, 'id'>)
          })
        )
        resolve(data)
      }, reject)
    })
  }

  public fetchOneById(gradeId: string) {
    return new Promise<IGrade>((resolve, reject) => {
      this.$db
        .doc(gradeId)
        .get()
        .then(
          (document) =>
            resolve({
              id: document.id,
              ...document.data()
            } as Required<IGrade>),
          reject
        )
    })
  }

  public updateOneById(gradeId: string, grade: IGrade) {
    return new Promise<void>((resolve, reject) => {
      this.$db.doc(gradeId).update(grade).then(resolve, reject)
    })
  }

  public removeOneById(gradeId: string) {
    return new Promise<void>((resolve, reject) => {
      this.$db.doc(gradeId).delete().then(resolve, reject)
    })
  }

  public createOne(newgrade: Omit<IGrade, 'id'>) {
    return new Promise<void>((resolve, reject) => {
      this.$db.add(newgrade).then(() => resolve(), reject)
    })
  }
})()

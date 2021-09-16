import * as VueDeepSet from 'vue-deepset'
import { Action, Module, VuexModule, Mutation } from 'vuex-class-modules'
import $GradesService from '@/services/Grades/grades.service'

import type { IGrade } from '@/services/Grades/grades.interface'
import type { XMachine, XMutationPayload } from '@/store/store.interface'

@Module()
export default class GradesModule extends VuexModule {
  public grades: XMachine<IGrade[]> = { data: [], state: 'idle' }
  public grade: XMachine<IGrade | null> = { data: null, state: 'idle' }

  public get totalAmountOfAllowedStudents() {
    return this.grades.data.reduce((accumulator, grade) => {
      accumulator += grade.quotas
      return accumulator
    }, 0)
  }

  public get totalAmountOfEnrolledStudents() {
    return this.grades.data.reduce((accumulator, grade) => {
      accumulator += grade.enrolled
      return accumulator
    }, 0)
  }

  public get totalAmountOfQuotaLeft() {
    return this.grades.data.reduce((accumulator, grade) => {
      accumulator += grade.quotas - grade.enrolled
      return accumulator
    }, 0)
  }

  public get totalAmountOfCompletedGrades() {
    return this.grades.data.filter((grade) => grade.status).length
  }

  public get totalAmountOfPendingGrades() {
    return this.grades.data.filter((grade) => !grade.status).length
  }
  @Mutation
  public MUTATE(payload: XMutationPayload) {
    VueDeepSet.VUEX_DEEP_SET(this, { path: payload.property, value: payload.with })
  }

  @Mutation
  public VUEX_DEEP_SET(payload: XMutationPayload) {
    VueDeepSet.VUEX_DEEP_SET(this, { path: payload.property, value: payload.with })
  }

  @Action
  public async readGrades() {
    this.MUTATE({ property: 'grades.state', with: 'pending' })
    try {
      const grades = await $GradesService.fetchAll()
      this.MUTATE({ property: 'grades.data', with: grades })
      this.MUTATE({ property: 'grades.state', with: 'fulfilled' })
    } catch (e) {
      this.MUTATE({ property: 'grades.state', with: 'rejected' })
      console.error(e)
    }
  }

  @Action
  public async readGrade(gradeId: string) {
    this.MUTATE({ property: 'grade.data', with: null })
    this.MUTATE({ property: 'grade.state', with: 'pending' })

    try {
      const grade = await $GradesService.fetchOneById(gradeId)
      this.MUTATE({ property: 'grade.data', with: grade })
      this.MUTATE({ property: 'grade.state', with: 'fulfilled' })
    } catch (e) {
      this.MUTATE({ property: 'grade.state', with: 'rejected' })
      console.error(e)
    }
  }

  @Action
  public async createGrade() {
    if (this.grade.data) {
      this.MUTATE({ property: 'grade.state', with: 'pending' })
      try {
        await $GradesService.createOne(this.grade.data)
        this.MUTATE({ property: 'grade.state', with: 'fulfilled' })
      } catch (e) {
        console.error(e)
        this.MUTATE({ property: 'grade.state', with: 'rejected' })
      }
    } else {
      console.warn('You cannot create an empty grade')
    }
  }

  @Action
  public async updateGrade(gradeId: string) {
    if (this.grade.data) {
      this.MUTATE({ property: 'grade.state', with: 'pending' })
      try {
        await $GradesService.updateOneById(gradeId, this.grade.data)
        this.MUTATE({ property: 'grade.state', with: 'fulfilled' })
      } catch (e) {
        console.error(e)
        this.MUTATE({ property: 'grade.state', with: 'rejected' })
      }
    } else {
      console.warn('You cannot update an empty grade')
    }
  }

  @Action
  public async deleteGrade(gradeId: string) {
    if (this.grade.data) {
      this.MUTATE({ property: 'grade.state', with: 'pending' })
      try {
        await $GradesService.removeOneById(gradeId)
        this.MUTATE({ property: 'grade.state', with: 'fulfilled' })
      } catch (e) {
        console.error(e)
        this.MUTATE({ property: 'grade.state', with: 'rejected' })
      }
    } else {
      console.warn('You cannot delete an empty grade')
    }
  }
}

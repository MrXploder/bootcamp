<template>
  <v-container class="h-100 d-flex align-center">
    <v-layout justify-center>
      <v-flex md8 class="d-flex align-center justify-center">
        <v-card class="card">
          <v-card-title>
            <h3>{{ $t('views.signin.title') }}</h3>
          </v-card-title>
          <v-card-text>
            <UserForm @submit="handleLoginFormSubmit" :loading="loading" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { sessionModule } from '@/store'

import type { ICredentials } from '@/store/modules/session/session.interface'

@Component({
  components: {
    UserForm: () => import('@/components/Users/UserForm.vue')
  }
})
export default class SignInView extends Vue {
  public loading: boolean = false

  public async handleLoginFormSubmit(credentials: ICredentials) {
    this.loading = true
    try {
      await sessionModule.signIn(credentials)
      this.$router.push('/home')
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 30px;
  padding: 12px;
}
</style>

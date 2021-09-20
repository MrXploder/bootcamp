<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs9>
        <h3>{{ $t('views.signup.title') }}</h3>
        <UserForm @submit="handleCreateUserFormSubmit" />
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
export default class SignUpView extends Vue {
  public async handleCreateUserFormSubmit(credentials: ICredentials) {
    try {
      await sessionModule.signUp(credentials)
      this.$router.push('/home')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style></style>

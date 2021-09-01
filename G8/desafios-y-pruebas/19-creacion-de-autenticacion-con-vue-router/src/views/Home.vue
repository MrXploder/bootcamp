<template>
  <div>
    <div>Home page</div>
    <pre>{{ currentUser }}</pre>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  computed: {
    currentUser() {
      return Firebase.auth().currentUser
    }
  }
}
</script>

<style></style>

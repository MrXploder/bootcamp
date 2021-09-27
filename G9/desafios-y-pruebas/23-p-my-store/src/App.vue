<template>
  <div>
    <Toolbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Toolbar from './components/App/Toolbar.vue'
export default {
  components: { Toolbar }
}
</script>

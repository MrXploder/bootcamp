<template>
  <div>
    <Toolbar />
    <router-view />
  </div>
</template>

<script>
import Toolbar from './components/App/Toolbar.vue'
export default {
  components: { Toolbar }
}
</script>

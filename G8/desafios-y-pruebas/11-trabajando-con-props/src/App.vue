<template>
  <div>
    <Todo :title="'Lista del supermercado'" />
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo,
  },
}
</script>

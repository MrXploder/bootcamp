<template>
  <div>
    <h1>Tareas del hogar</h1>
    <Todo categoria="hogar" />
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
  components: { Todo },
};
</script>

<style></style>

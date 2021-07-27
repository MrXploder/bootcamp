<template>
  <img :src="src" class="avatar" />
</template>

<script>
export default {
  name: 'ListItemAvatar',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 4px;
}
</style>

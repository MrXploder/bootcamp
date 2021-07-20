<template>
  <div>
    <input :type="inputType" />
    <button @click="changeType">toggle</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputType: 'text',
  }),
  methods: {
    changeType() {
      if (this.inputType === 'text') {
        this.inputType = 'password'
      } else {
        this.inputType = 'text'
      }
    },
  },
}
</script>

<style></style>

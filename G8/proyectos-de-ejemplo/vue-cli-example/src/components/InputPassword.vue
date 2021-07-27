<template>
  <div>
    <input :type="inputType" />
    <button @click="changeType">toggle</button>
  </div>
</template>

<script>
// const options = {

// }

// export default options;

export default {
  data: () => ({
    inputType: 'text',
  }),
  // data: function(){
  //   return {
  //     inputType: 'text'
  //   }
  // },
  methods: {
    changeType() {
      this.$emit('toggle', this.inputType)
      if (this.inputType === 'text') {
        this.inputType = 'password'
      } else {
        this.inputType = 'text'
      }
    },

    // changeType: function(){

    // },
    // changeType: () => {

    // },

    // changeType(){

    // }
  },
  computed: {},
}
</script>

<style></style>

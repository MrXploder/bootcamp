<template>
  <v-text-field
    v-bind="{ ...$props, ...$attrs }"
    v-on="$listeners"
    filled
    height="38px"
    loader-height="0"
    rounded
    color="dark"
  ></v-text-field>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class VSInputComponent extends Vue {}
</script>

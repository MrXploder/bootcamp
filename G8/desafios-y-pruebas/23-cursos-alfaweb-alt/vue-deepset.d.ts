// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue'

declare module 'vue-deepset' {
  export function VUEX_DEEP_SET(target: any, payload: { path: string; value: any }): any
  export function extendMutation(mutations: any): any
}

declare module 'vue/types/vue' {
  interface Vue {
    $deepModel: (key: string) => any
  }
}

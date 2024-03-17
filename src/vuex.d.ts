// import { Store } from 'vuex'

// declare module '@vue/runtime-core' {

//   // declare your own store states
//   interface State {
//     title: string
//     words: Array<number | string>
//   }

//   // provide typings for `this.$store`
//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
// }
// // declare module "vuex" {
// //   export * from "vuex/types/index.d.ts";
// //   export * from "vuex/types/helpers.d.ts";
// //   export * from "vuex/types/logger.d.ts";
// //   export * from "vuex/types/vue.d.ts";
// // }

declare module "vuex" {
  export * from "vuex/types/index.d.ts";
  export * from "vuex/types/helpers.d.ts";
  export * from "vuex/types/logger.d.ts";
  export * from "vuex/types/vue.d.ts";
}

declare module '@vue/runtime-core' {
  interface State {
    title: string
    words: Array<number | string>
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
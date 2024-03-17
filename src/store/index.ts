import { createStore } from "vuex";
// import type { InjectionKey } from 'vue';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export interface State {
  title: string
  words: Array<number | string>
}

// export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    title: "Vuex Store",
    words: []
  },
  actions,
  getters,
  mutations
});

export default store;
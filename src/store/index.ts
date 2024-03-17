import { createStore } from "vuex";
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export interface State {
  title: string
  words: Array<number | string>
}

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
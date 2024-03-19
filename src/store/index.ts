import { createStore } from "vuex";
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export interface State {
  title: string
  words: Array<number | string>
  menuItems: Array<string>
  isOpen: boolean
}

export const store = createStore<State>({
  state: {
    title: "Vuex Store",
    words: [],
    menuItems: ['menu1', 'menu2', 'menu2'],
    isOpen: false
  },
  actions,
  getters,
  mutations
});

export default store;
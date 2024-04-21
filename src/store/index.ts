import { createStore } from "vuex";
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export interface State {
  title: string
  words: Array<number | string>
  menuItems: { name: string, link: string }[],
  isOpen: boolean,
  username: string,
  maxAmountStock: number,
  amountTampons: number,
  amountPads: number
}

export const store = createStore<State>({
  state: {
    title: 'Vuex Store',
    words: [],
    menuItems: [
      { name: 'Home', link: '/' },
      { name: 'Statistics', link: '/stats' },
      { name: 'User Settings', link: '/config' },
      { name: 'App Settings', link: '/settings' }],
    isOpen: false,
    username: 'godess',
    maxAmountStock: 30,
    amountTampons: 20,
    amountPads: 10
  },
  actions,
  getters,
  mutations
});

export default store;
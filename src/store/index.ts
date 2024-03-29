import { createStore } from "vuex";
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export interface State {
  title: string
  words: Array<number | string>
  menuItems: { name: string, link: string }[],
  isOpen: boolean,
  email: string,
  password: string
}

export const store = createStore<State>({
  state: {
    title: 'Vuex Store',
    words: [],
    menuItems: [
      { name: 'Home', link: '/' },
      { name: 'Statistics', link: '/stats' },
      { name: 'User', link: '/config' },
      { name: 'Settings', link: '/settings' }],
    isOpen: false,
    email: '',
    password: ''
  },
  actions,
  getters,
  mutations
});

export default store;
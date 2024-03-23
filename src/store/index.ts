import { createStore } from "vuex";
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export interface State {
  title: string
  words: Array<number | string>
  menuItems: { name: string, link: string }[],
  isOpen: boolean
}

export const store = createStore<State>({
  state: {
    title: "Vuex Store",
    words: [],
    menuItems: [
      { name: 'LockView', link: '/' },
      { name: 'StatisticsView', link: '/stats' },
      { name: 'UserConfigView', link: '/config' },
      { name: 'SettingsView', link: '/settings' }],
    isOpen: false
  },
  actions,
  getters,
  mutations
});

export default store;
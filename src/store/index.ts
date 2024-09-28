import { createStore } from "vuex";
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import type { Product } from '../assets/interfaces';

export interface State {
  title: string
  menuItems: { name: string, link: string }[],
  isOpen: boolean,
  username: string,
  maxAmountStock: number,
  usedProducts: Product[]
}

export const store = createStore<State>({
  state: {
    title: 'Vuex Store',
    menuItems: [
      { name: 'Home', link: '/' },
      { name: 'Statistics', link: '/stats' },
      { name: 'User Settings', link: '/config' },
      { name: 'App Settings', link: '/settings' }],
    isOpen: false,
    username: 'godess',
    maxAmountStock: 30,
    usedProducts: [
      { type: 'Tampons', isUsed: false, amountInStock: 0, },
      { type: 'Pads', isUsed: true, amountInStock: 11, },
      { type: 'Cups', isUsed: false, amountInStock: 12, },
      { type: 'Whipes', isUsed: true, amountInStock: 10, },
    ]

  },
  actions,
  getters,
  mutations
});

export default store;

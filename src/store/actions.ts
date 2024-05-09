import type { Commit } from 'vuex';
import type { AmountStock } from "../assets/interfaces";

// actions: can contain asyncronous operations
const saveUsername = ({ commit }: { commit: Commit }, username: string) => {
  commit('SAVE_USERNAME', username);
}

const updateAmount = ({ commit }: { commit: Commit },
  { amountInStock, type }: AmountStock) => {
  switch (type) {
    case 'Tampons':
      commit('UPDATE_AMOUNT_TAMPONS', amountInStock);
      break;
    case 'Pads':
      commit('UPDATE_AMOUNT_PADS', amountInStock);
      break;
    case 'Cups':
      commit('UPDATE_AMOUNT_CUPS', amountInStock);
      break;
    case 'Whipes':
      commit('UPDATE_AMOUNT_WHIPES', amountInStock);
      break;
    default:
      console.log(`Sorry, error occured.`);
  }
}

export default {
  saveUsername,
  updateAmount
}
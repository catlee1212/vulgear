import type { Commit } from 'vuex';
import type { AmountStock } from "../assets/interfaces";

// actions: can contain asyncronous operations
const saveWord = ({ commit }: { commit: Commit }, inputValue: number) => {
  commit('SAVE_WORDS', inputValue);
}

const saveUsername = ({ commit }: { commit: Commit }, username: string) => {
  commit('SAVE_USERNAME', username);
}

const updateAmount = ({ commit }: { commit: Commit },
  { amountStock, type }: AmountStock) => {
  switch (type) {
    case 'tampons':
      commit('UPDATE_AMOUNT_TAMPONS', amountStock);
      break;
    case 'pads':
      commit('UPDATE_AMOUNT_PADS', amountStock);
      break;
    default:
      console.log(`Sorry, error occured.`);
  }
}

export default {
  saveWord,
  saveUsername,
  updateAmount
}
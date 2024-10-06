import type { Commit } from 'vuex';
import type { AmountStock, Product } from "../assets/interfaces";

// actions: can contain asyncronous operations
const saveUsername = ({ commit }: { commit: Commit }, username: string) => {
  commit('SAVE_USERNAME', username);
}

const saveUserId = ({ commit }: { commit: Commit }, userId: string) => {
  commit('SAVE_USERID', userId);
}

const updateAmount = ({ commit }: { commit: Commit },
  { amountInStock, productType }: AmountStock) => {
  switch (productType) {
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

const updateUsage = ({ commit }: { commit: Commit },
  { isUsed, productType }: Product) => {
  switch (productType) {
    case 'Tampons':
      commit('UPDATE_USAGE_TAMPONS', isUsed);
      break;
    case 'Pads':
      commit('UPDATE_USAGE_PADS', isUsed);
      break;
    case 'Cups':
      commit('UPDATE_USAGE_CUPS', isUsed);
      break;
    case 'Whipes':
      commit('UPDATE_USAGE_WHIPES', isUsed);
      break;
    default:
      console.log(`Sorry, error occured.`);
  }
}

export default {
  saveUsername,
  updateAmount,
  updateUsage,
  saveUserId
}
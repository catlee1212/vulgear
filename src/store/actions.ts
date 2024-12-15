import type { Commit } from 'vuex';
import type { AmountStock, Product } from "../assets/interfaces";
import axios from "axios";

// actions: can contain asyncronous operations
const fetchConfig = async ({ commit }: { commit: Commit }) => {
  console.log("fetching");

  const userId = localStorage.getItem("userid");
  await axios
    .get(import.meta.env.VITE_API_URL + "/user/" + userId, { withCredentials: true })
    .then(function (response) {
      if (response.status === 200) {
        commit('SET_CONFIG', response.data);
        commit('UPDATE_USED_PRODUCTS', response.data.usedProducts);
      }
    })
    .catch(function (error) {
      // Errormessage
      console.log(error);
    });
}

const saveUsername = ({ commit }: { commit: Commit }, username: string) => {
  commit('SAVE_USERNAME', username);
}

const saveUserId = ({ commit }: { commit: Commit }, userId: string) => {
  commit('SAVE_USERID', userId);
}

const updateUsedProducts = ({ commit }: { commit: Commit }, usedProducts: string) => {
  console.log(usedProducts)
  commit('UPDATE_USED_PRODUCTS', usedProducts);
}

const updateAmount = ({ commit }: { commit: Commit },
  { amountInStock, productType }: AmountStock) => {

  commit('FIRE_HAS_CHANGES', true);

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
  commit('FIRE_HAS_CHANGES', true);

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

const hasChanges = ({ commit }: { commit: Commit }, hasChanges: boolean) => {
  console.log(hasChanges)
  commit('FIRE_HAS_CHANGES', hasChanges);
}

export default {
  saveUserId,
  saveUsername,
  updateAmount,
  updateUsage,
  fetchConfig,
  updateUsedProducts,
  hasChanges
}
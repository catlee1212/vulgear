// getters: gets data from state
// think of it as computed property of state
import type { State } from ".";

const isOpen = (state: State) => state.isOpen;
const username = (state: State) => state.username;
const maxAmountStock = (state: State) => state.maxAmountStock;
const usedProducts = (state: State) => state.usedProducts;

export default {
  isOpen,
  username,
  maxAmountStock,
  usedProducts
}
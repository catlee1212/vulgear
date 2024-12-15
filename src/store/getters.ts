// getters: gets data from state
// think of it as computed property of state
import type { State } from ".";

const config = (state: State) => state.config;
const isOpen = (state: State) => state.isOpen;
const username = (state: State) => state.username;
const maxAmountStock = (state: State) => state.maxAmountStock;
const usedProducts = (state: State) => state.usedProducts;
const userid = (state: State) => state.userid;
const hasChanges = (state: State) => state.fireHasChanges;

export default {
  config,
  isOpen,
  username,
  maxAmountStock,
  usedProducts,
  userid,
  hasChanges
}
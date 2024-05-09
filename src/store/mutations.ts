import type { State } from ".";
// mutations: function where we change values of states
// can contain syncronous operations
// commit updates mutation

const TOGGLE_MENU = (state: State) => {
  state.isOpen = !state.isOpen;
}

const SAVE_USERNAME = (state: State, username: string) => {
  state.username = username;
}

const UPDATE_AMOUNT_TAMPONS = (state: State, amountTampons: number) => {
  state.usedProducts[0].amountInStock = amountTampons - 1;
}

const UPDATE_AMOUNT_PADS = (state: State, amountPads: number) => {
  state.usedProducts[1].amountInStock = amountPads - 1;
}

const UPDATE_AMOUNT_CUPS = (state: State, amountCups: number) => {
  state.usedProducts[2].amountInStock = amountCups - 1;
}

const UPDATE_AMOUNT_WHIPES = (state: State, amountWhipes: number) => {
  state.usedProducts[3].amountInStock = amountWhipes - 1;
}

export default {
  TOGGLE_MENU,
  SAVE_USERNAME,
  UPDATE_AMOUNT_TAMPONS,
  UPDATE_AMOUNT_PADS,
  UPDATE_AMOUNT_CUPS,
  UPDATE_AMOUNT_WHIPES
};
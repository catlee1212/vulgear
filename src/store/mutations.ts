import type { State } from ".";
// mutations: function where we change values of states
// can contain syncronous operations
// commit updates mutation

const SAVE_WORDS = (state: State, inputValue: string) => {
  state.words.push(inputValue);
}

const TOGGLE_MENU = (state: State) => {
  state.isOpen = !state.isOpen;
}

const SAVE_USERNAME = (state: State, username: string) => {
  state.username = username;
}

const UPDATE_AMOUNT_TAMPONS = (state: State, amountTampons: number) => {
  state.amountTampons = state.amountTampons - 1;
}

const UPDATE_AMOUNT_PADS = (state: State, amountPads: number) => {
  state.amountPads = state.amountPads - 1;
}

export default {
  SAVE_WORDS,
  TOGGLE_MENU,
  SAVE_USERNAME,
  UPDATE_AMOUNT_TAMPONS,
  UPDATE_AMOUNT_PADS
};
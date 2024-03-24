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

export default {
  SAVE_WORDS,
  TOGGLE_MENU,
  SAVE_USERNAME
};
import type { State } from ".";
// mutations: function where we change values of states
// can contain syncronous operations
// commit updates mutation

const SAVE_WORDS = (state: State, inputValue: string) => {
  state.words.push(inputValue);
}

const TOGGLE_MENU = (state: State) => {
  console.log('toggler', state.isOpen)
  state.isOpen = !state.isOpen;
}

export default {
  SAVE_WORDS,
  TOGGLE_MENU
};
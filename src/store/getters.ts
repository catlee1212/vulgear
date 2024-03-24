// getters: gets data from state
// think of it as computed property of state
import type { State } from ".";

const totalWords = (state: State) => state.words.length;
const isOpen = (state: State) => state.isOpen;
const username = (state: State) => state.username;

export default {
  totalWords,
  isOpen,
  username
}
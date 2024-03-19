// getters: gets data from state
// think of it as computed property of state
import type { State } from ".";

const totalWords = (state: State) => state.words.length;
const isOpen = (state: State) => state.isOpen;

export default {
  totalWords,
  isOpen
}
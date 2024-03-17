// getters: gets data from state
// think of it as computed property of state
import type { State } from ".";

const totalWords = (state: State) => state.words.length;

export default {
  totalWords
}
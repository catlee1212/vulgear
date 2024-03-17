import type { Commit } from 'vuex';

// actions: can contain asyncronous operations
const saveWord = ({ commit }: { commit: Commit }, inputValue: number) => {
  commit('SAVE_WORDS', inputValue);
}

export default {
  saveWord
}
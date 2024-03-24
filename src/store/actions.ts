import type { Commit } from 'vuex';

// actions: can contain asyncronous operations
const saveWord = ({ commit }: { commit: Commit }, inputValue: number) => {
  commit('SAVE_WORDS', inputValue);
}

const saveUsername = ({ commit }: { commit: Commit }, username: string) => {
  commit('SAVE_USERNAME', username);
}

export default {
  saveWord,
  saveUsername
}
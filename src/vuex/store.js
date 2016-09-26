import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  todos: [],
};

/* eslint-disable */
const mutations = {
  ADD_TODO(state, { text }) {
    state.todos.push({
      text: text,
      done: false,
    });
  },
};

export default new Vuex.Store({
  actions,
  state,
  mutations,
});

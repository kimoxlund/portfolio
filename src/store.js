import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    bg: "",
    h: 188,
    s: 35,
    l: 35,
    project: false,
    scrolled: false
  },

  mutations: {
    setPage: (state, payload) => {
      for (let [key, value] of Object.entries(payload)) {
        state[key] = value;
      }
    },

    setScroll: (state, payload) => {
      state.scrolled = payload;
    }
  }
});

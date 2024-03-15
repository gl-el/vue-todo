import Vue from "vue";
import Vuex from "vuex";
import moduleCounter from "@/store/moduleCounter";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    counter: moduleCounter,
  },
});

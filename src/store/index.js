import Vue from "vue";
import Vuex from "vuex";
import moduleCounter from "@/store/moduleCounter";
import moduleTodo from "@/store/moduleTodo";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    counter: moduleCounter,
    todos: moduleTodo,
  },
});

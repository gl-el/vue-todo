const state = {
  items: [
    { text: "test", done: true },
    { text: "test2", done: false },
  ],
};

const mutations = {
  addItem(state, item) {
    state.items.push(item);
  },
  removeItem(state, item) {
    state.items.splice(state.items.indexOf(item), 1);
  },
  editItem(state, { item, text = item?.text, done = item?.done }) {
    const indexOfItem = state.items.findIndex((item) => item.text === text);
    console.log("state nutation", "item", item, "text", text, "done", done);
    state.items.splice(indexOfItem, 1, { ...item, text, done });
  },
};

const actions = {
  addTodo({ commit }, value) {
    commit("addItem", { text: value, done: false });
  },
  removeTodo({ commit }, todo) {
    commit("removeItem", todo);
  },
  toggleStatus({ state, commit }, todo) {
    console.log("action", state.items, "todo", todo);
    commit("editItem", { todo, done: !todo.done });
  },
  editTodoText({ commit }, { todo, text }) {
    commit("editItem", { todo, text });
  },
  toggleAll({ state, commit }) {
    state.items.forEach((item) => {
      commit("editItem", { item, done: !item.done });
    });
  },
  removeDone({ state, commit }) {
    state.items
      .filter((item) => item.done)
      .forEach((todo) => commit("removeItem", { todo }));
  },
};

const moduleTodo = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default moduleTodo;

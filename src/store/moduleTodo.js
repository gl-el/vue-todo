const state = {
  items: [
    { id: 0, text: "test", done: true },
    { id: 1, text: "test2", done: false },
  ],
  nextId: 2,
};

const mutations = {
  addItem(state, item) {
    item.id = state.nextId++;
    state.items.push(item);
  },
  removeItem(state, item) {
    const index = state.items.findIndex((todo) => todo.id === item.id);
    state.items.splice(index, 1);
  },
  editItem(state, item) {
    const { id, text, done } = item;
    const index = state.items.findIndex((todo) => todo.id === id);
    state.items[index].text = text;
    state.items[index].done = done;
  },
};

const actions = {
  addTodo({ commit }, text) {
    commit("addItem", { text, done: false });
  },
  removeTodo({ commit }, item) {
    commit("removeItem", item);
  },
  toggleStatus({ commit }, item) {
    commit("editItem", {
      ...item,
      done: !item.done,
    });
  },
  editTodoText({ commit }, { item, newText }) {
    commit("editItem", {
      ...item,
      text: newText,
    });
  },
};

const getters = {
  allTodos: (state) => state.items,
  completedTodos: (state) => state.items.filter((todo) => todo.done),
  activeTodos: (state) => state.items.filter((todo) => !todo.done),
};

const moduleTodo = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default moduleTodo;

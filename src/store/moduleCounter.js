//изменение стейта вызывает ререндер
//всех компонентов, которые подписаны на стейт
//начальное состояние
const state = {
  count: 0,
};

//мутирующие функции для изменения стейта, первый аргумент - всегда сам объект стейта,
//следующие аргументы - значения, которые можно использовать для изменения стейта
//единственный способ прямого изменения стейта, только синхронные функции
//store.commit('increment') - вызов мутации с соответствующим именем
//store.commit('increaseByValue', 5) - вызов мутации и передача аргумента
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  increaseByValue(state, value) {
    state.count = state.count + value;
  },
};

//доступ к стейту для возврата новой инфы вычисленной на основе стейта
//первый аргумент - всегда стейт, второй - другие геттеры (при необходимости)
const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? "even" : "odd"),
};

//сайд эффекты, асинхронные операции
//первый и единственный аргумент - контекст, из него доступны state, getters, commit
const actions = {
  increment(context) {
    context.commit("increment");
  },
  decrement({ commit }) {
    commit("decrement");
  },
};

const moduleCounter = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default moduleCounter;

<script>
export default {
  name: "CounterItem",
};
</script>

<template>
  <div class="wrapper">
    <h2 class="green">
      State counter is {{ $store.state.count }} and count is
      <!--      доступ к геттерам стейта-->
      {{ $store.getters.evenOrOdd }}
    </h2>
    <div>
      <!--      action вызываются через dispatch-->
      <button @click="$store.dispatch('increment')">Increase</button>
      <button @click="$store.dispatch('decrement')">Decrease</button>
      <!--      функции мутации вызываются через commit-->
      <button @click="$store.commit('increaseByValue', 10)">+ 10</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
}
</style>

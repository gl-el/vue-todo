<script>
export default {
  name: "CounterItem",
};
</script>

<template>
  <div class="wrapper">
    <h2 class="green">
      State counter is {{ $store.state.counter.count }} and count is
      <!--      доступ к геттерам стейта-->
      {{ $store.getters["counter/evenOrOdd"] }}
    </h2>
    <div>
      <!--      action вызываются через dispatch-->
      <button @click="$store.dispatch('counter/increment')">Increase</button>
      <button @click="$store.dispatch('counter/decrement')">Decrease</button>
      <!--      функции мутации вызываются через commit-->
      <button @click="$store.commit('counter/increaseByValue', 10)">
        + 10
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
}
</style>

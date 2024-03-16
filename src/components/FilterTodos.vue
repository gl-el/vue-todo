<script>
export default {
  name: "FilterTodos",
  methods: {
    selectFilter(filter) {
      this.$emit("select", filter);
    },
  },
};
</script>

<template>
  <div>
    <button @click="selectFilter('all')">All Todos</button>
    <button @click="selectFilter('completed')">Completed Todos</button>
    <button @click="selectFilter('active')">Active Todos</button>
  </div>
</template>

<style scoped></style>

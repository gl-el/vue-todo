<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <h2 class="green heading">Todo List</h2>
    <ul class="list">
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.toUpperCase() }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.heading {
  text-align: center;
}
.list {
  padding: 0;
  list-style: none;
  text-align: center;
}
</style>

<script>
import TodoList from "../components/TodoList.vue";
import AddTodo from "../components/AddTodo.vue";
export default {
  components: {
    TodoList,
    AddTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
      console.log("New todo:", todo, "All todos:", this.todos);
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <TodoList :todos="todos"></TodoList>
    <AddTodo @add="addTodo"></AddTodo>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>

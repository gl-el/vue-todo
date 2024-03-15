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
      todos: [
        { title: "asd", done: false },
        { title: "zxc", done: true },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
      console.log("New todo:", todo, "All todos:", this.todos);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    checkTodo(index) {
      this.todos[index].done = !this.todos[index].done;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <TodoList :todos="todos" @delete="deleteTodo" @check="checkTodo"></TodoList>
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

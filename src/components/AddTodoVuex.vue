<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodoVuex",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),
    add() {
      this.addTodo(this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<template>
  <div>
    <input
      type="text"
      v-model="newTodo"
      placeholder="Enter a new todo"
      @keyup.enter="add"
    />
    <button @click="add">Add</button>
  </div>
</template>

<style scoped></style>

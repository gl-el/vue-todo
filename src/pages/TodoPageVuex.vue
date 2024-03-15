<script>
import TodoItemVuex from "@/components/TodoItemVuex.vue";
import { mapActions } from "vuex";

export default {
  name: "TodoPageVuex",
  components: { TodoItemVuex },
  computed: {
    todos() {
      return this.$store.state.todos.items;
    },
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),
    addItem(e) {
      const text = e.target.value;
      this.addTodo(text);
    },
  },
};
</script>

<template>
  <div>
    <input
      class="new-todo"
      autofocus
      placeholder="Add new item"
      @keyup.enter="addItem"
    />
    <ul class="list">
      <li v-for="(todo, index) in todos" :key="index">
        <TodoItemVuex :todo="todo" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list {
  list-style: none;
}
</style>

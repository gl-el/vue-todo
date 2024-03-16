<script>
import TodoItemVuex from "@/components/TodoItemVuex.vue";
import { mapActions } from "vuex";

export default {
  name: "TodoListVuex",
  components: { TodoItemVuex },
  props: ["todos"],
  methods: {
    ...mapActions("todos", ["addTodo"]),
  },
};
</script>

<template>
  <ul class="list">
    <li class="item" v-for="(todo, index) in todos" :key="index">
      <TodoItemVuex :todo="todo" />
    </li>
  </ul>
</template>

<style scoped>
.list {
  list-style: none;
  padding: 0;
}

.item {
  width: 600px;
  text-align: center;
}

.item:not(:first-of-type) {
  margin-top: 20px;
}
</style>

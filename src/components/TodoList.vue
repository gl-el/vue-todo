<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: { TodoItem },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteTodo(index) {
      this.$emit("delete", index);
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <h2 class="green heading">Todo List</h2>
    <ul class="list">
      <li class="item" v-for="(todo, index) in todos" :key="index">
        <TodoItem :todo="todo" @delete="deleteTodo(index)" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
}

.heading {
  text-align: center;
}

.list {
  width: 80%;
  padding: 0;
  list-style: none;
  text-align: center;
}
</style>

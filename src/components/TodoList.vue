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
    checkTodo(index) {
      this.$emit("check", index);
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <h2 class="green heading">Todo List</h2>
    <ul class="list">
      <li class="item" v-for="(item, index) in todos" :key="index">
        <TodoItem
          :todo="item.title"
          :done="item.done"
          @delete="deleteTodo(index)"
          @check="checkTodo(index)"
        />
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
  width: 100%;
  padding: 0;
  list-style: none;
}

.item {
  margin-top: 10px;
}
</style>

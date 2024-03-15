<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItemVuex",
  props: ["todo"],
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    ...mapActions("todos", ["toggleStatus", "editTodoText", "removeTodo"]),
  },
};
</script>

<template>
  <div class="wrapper">
    <input type="checkbox" :checked="todo.done" @change="toggleStatus(todo)" />
    <label>
      <input type="text" :value="todo.text" :disabled="isEdit !== true" />
      <button @click="isEdit = !isEdit" v-show="isEdit === false">Edit</button>
      <button v-show="isEdit">Save</button>
    </label>
    <button @click="removeTodo(todo)">Remove</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 20px 50% 80px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 5px;
}

.through {
  text-decoration: line-through;
}
</style>

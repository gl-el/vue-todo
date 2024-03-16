<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItemVuex",
  props: ["todo"],
  data() {
    return {
      isEdit: false,
      newText: this.todo.text,
    };
  },
  watch: {
    todo(newValue) {
      this.newText = newValue.text;
    },
    isEdit(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.$refs.todoInput.focus();
        });
      }
    },
  },
  methods: {
    ...mapActions("todos", ["toggleStatus", "editTodoText", "removeTodo"]),
    save() {
      this.editTodoText({ item: this.todo, newText: this.newText });
      this.isEdit = false;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <input type="checkbox" :checked="todo.done" @change="toggleStatus(todo)" />
    <label>
      <input
        ref="todoInput"
        type="text"
        v-model="newText"
        :disabled="isEdit !== true"
        :class="{ through: todo.done }"
      />
      <button @click="isEdit = !isEdit" v-show="isEdit === false">Edit</button>
      <button v-show="isEdit" @click="save">Save</button>
    </label>
    <button @click="removeTodo(todo)">Remove</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 20px 1fr 80px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 10px;
}

.through {
  text-decoration: line-through;
}
</style>

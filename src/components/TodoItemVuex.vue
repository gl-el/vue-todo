<script>
import { mapActions } from "vuex";
import StyledTextInput from "@/components/controls/StyledTextInput.vue";
import StyledButton from "@/components/controls/StyledButton.vue";

export default {
  name: "TodoItemVuex",
  components: { StyledButton, StyledTextInput },
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
    updateInput(value) {
      this.newText = value;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <input type="checkbox" :checked="todo.done" @change="toggleStatus(todo)" />
    <div>
      <StyledTextInput
        ref="todoInput"
        :value="newText"
        @input="updateInput"
        :class="{ through: todo.done }"
        :disabled="isEdit !== true"
      />
      <StyledButton @click="isEdit = !isEdit" v-show="isEdit === false">
        Edit
      </StyledButton>
      <StyledButton v-show="isEdit" @click="save">Save</StyledButton>
    </div>
    <StyledButton @click="removeTodo(todo)">Remove</StyledButton>
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

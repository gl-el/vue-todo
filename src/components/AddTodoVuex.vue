<script>
import { mapActions } from "vuex";
import StyledButton from "@/components/controls/StyledButton.vue";
import StyledTextInput from "@/components/controls/StyledTextInput.vue";

export default {
  name: "AddTodoVuex",
  components: { StyledTextInput, StyledButton },
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
    updateInput(value) {
      this.newTodo = value;
    },
  },
};
</script>

<template>
  <div class="add__wrapper">
    <StyledTextInput
      :value="newTodo"
      class="add"
      placeholder="Enter a new todo"
      @input="updateInput"
      @keyup.enter="add"
    />
    <StyledButton @click="add" :disabled="newTodo.length === 0"
      >Add</StyledButton
    >
  </div>
</template>

<style scoped>
.add {
  margin-right: 15px;
}
</style>

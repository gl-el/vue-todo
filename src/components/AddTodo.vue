<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.$emit("add", this.newTodo);
        this.newTodo = "";
      }
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
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">Add</button>
  </div>
</template>

<style scoped></style>

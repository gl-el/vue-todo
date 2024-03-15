<script>
export default {
  props: {
    todo: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    deleteTodo() {
      this.$emit("delete");
    },
    checkTodo() {
      this.$emit("check");
      console.log(this.done);
    },
  },
};
</script>

<template>
  <div class="item">
    <input type="checkbox" :checked="done" @change="checkTodo" />
    <span v-bind:class="{ through: done }">{{ todo }}</span>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.through {
  text-decoration: line-through;
}
</style>

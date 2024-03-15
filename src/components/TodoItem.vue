<script>
export default {
  props: {
    todo: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteTodo() {
      this.$emit("delete");
    },
  },
};
</script>

<template>
  <div class="item">
    <span>{{ todo }}</span>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

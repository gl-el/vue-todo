<script>
import StyledButton from "@/components/controls/StyledButton.vue";

export default {
  name: "FilterTodos",
  components: { StyledButton },
  methods: {
    selectFilter(filter) {
      this.$emit("select", filter);
    },
  },
};
</script>

<template>
  <div class="controls">
    <StyledButton @click="selectFilter('all')"> All Todos </StyledButton>
    <StyledButton @click="selectFilter('completed')">
      Completed Todos
    </StyledButton>
    <StyledButton @click="selectFilter('active')"> Active Todos </StyledButton>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  gap: 10px;
}
</style>

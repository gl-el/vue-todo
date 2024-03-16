<script>
export default {
  name: "StyledButton",
  props: {
    disabled: Boolean,
  },
};
</script>

<template>
  <button class="button" @click="$emit('click')" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: var(--color-background-soft);
  color: var(--color-heading);
  border: 1px solid var(--color-border);
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s;
}

.button:hover {
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border-hover);
}

.button:disabled {
  background-color: var(--color-background);
  cursor: not-allowed;
}
</style>

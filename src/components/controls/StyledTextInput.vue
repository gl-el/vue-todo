<script>
export default {
  name: "StyledTextInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    focus() {
      this.$refs.inputField.focus();
    },
  },
};
</script>

<template>
  <input
    class="text-input"
    type="text"
    ref="inputField"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
  />
</template>

<style scoped>
.text-input {
  background-color: var(--color-background-soft);
  color: var(--color-heading);
  border: 1px solid var(--color-border);
  outline: none;
  padding: 5px 10px;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.2s;
}

.text-input:disabled {
  cursor: not-allowed;
}

.text-input:focus {
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border-hover);
}
</style>

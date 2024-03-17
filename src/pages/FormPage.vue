<script>
import StyledTextInput from "@/components/controls/StyledTextInput.vue";
import { required, email, minLength } from "vuelidate/lib/validators";
import StyledButton from "@/components/controls/StyledButton.vue";
export default {
  name: "FormPage",
  components: { StyledButton, StyledTextInput },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        policies: [],
      },
      policiesOptions: ["option1", "option 2", "option 3"],
      isSubmitted: false,
    };
  },
  validations: {
    formData: {
      name: { required, minLength: minLength(4) },
      email: { required, email },
      policies: {
        required,
        minLength: 1,
      },
    },
  },
  methods: {
    handleSubmit() {
      this.isSubmitted = true;
      if (this.$v.formData.$invalid) {
        console.log("Form has errors");
        return;
      }
      console.log("Form submitted successfully", this.formData);
    },
    setName(value) {
      this.formData.name = value;
      this.$v.formData.name.$touch();
    },
    setEmail(value) {
      this.formData.email = value;
      this.$v.formData.email.$touch();
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <label class="label">
      Name:
      <StyledTextInput
        :value="formData.name"
        @input="setName"
        :placeholder="'Enter your name'"
      />
      <span
        class="error"
        v-if="
          $v.formData.name.$invalid && ($v.formData.name.$dirty || isSubmitted)
        "
        >Enter valid name, 4 symbols min</span
      >
    </label>
    <label class="label">
      Email:
      <StyledTextInput
        :value="formData.email"
        @input="setEmail"
        :placeholder="'Enter your email'"
      />
      <span
        class="error"
        v-if="
          $v.formData.email.$invalid &&
          ($v.formData.email.$dirty || isSubmitted)
        "
        >Enter valid email</span
      >
    </label>
    <div>
      <p>Select one or more options:</p>
      <label
        v-for="(policy, index) in policiesOptions"
        :key="index"
        class="checkbox"
      >
        <input type="checkbox" :value="policy" v-model="formData.policies" />
        {{ policy }}
      </label>
      <span class="error" v-if="$v.formData.policies.$invalid && isSubmitted" v-
        >Select minimum one option</span
      >
    </div>
    <StyledButton>Submit</StyledButton>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.label {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3px;

  & > input {
    width: 100%;
  }
}

.checkbox {
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 5px;
}

.invalid {
  border-color: var(--color-error);
}

.error {
  color: var(--color-error);
}
</style>

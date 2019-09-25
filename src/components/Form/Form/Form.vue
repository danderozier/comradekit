<template>
  <div class="ck-form">
    <!-- @slot Form fields -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      isSubmitting: false,
      formData: {},
      isFormComponent: true
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.formData);
    },
    onSubmit() {}
  }
};
</script>

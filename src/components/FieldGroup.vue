<template>
  <div class="field-group">
    <span class="field-group__label">{{ label }}</span>
    <slot />
    <div class="field-group__errors">
      <div
        v-for="error in errors"
        ref="error"
        :key="error"
        class="error-message"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldGroup",
  props: {
    errors: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style lang="scss">
.field-group {
  &__errors {
    margin-top: $field-errors-margin-top;

    .error-message {
      align-items: center;
      color: $danger-color;
      display: flex;
      font-size: $field-label-font-size;
      font-style: inherit;
      font-weight: normal;
      line-height: $field-label-line-height;
      padding-left: $input-border-width;
    }
  }

  .field-group__label {
    color: $field-label-color;
    font-size: $field-label-font-size;
    line-height: $field-label-line-height;
    display: block;
    font-weight: $field-label-font-weight;
    padding: $field-label-padding;

    &::after {
      content: "*";
      color: $danger-color;
      display: inline-block;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.33;
      opacity: 0;
      padding-left: 0.125rem;
    }
  }

  [required] .field-group__label::after {
    opacity: 1;
  }
}
</style>

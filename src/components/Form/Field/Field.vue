<template>
  <div class="field" :is-required="required">
    <span class="field__label">{{ label }}</span>
    <slot />
    <div class="field-errors">
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
  name: "Field",
  props: {
    /**
     * Errors to be displayed alongside the field input
     */
    errors: {
      type: Array,
      default: () => []
    },
    /**
     * The field label
     */
    label: {
      type: String,
      default: undefined
    },
    /**
     * Whether the field is required
     */
    required: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.field {
  &__label {
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

  &:first-child &__label {
    padding-top: 0;
  }

  &[is-required] .field-group__label::after {
    opacity: 1;
  }
}
</style>

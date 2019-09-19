<template>
  <div class="field" :is-required="required">
    <div class="field__header">
      <label
        class="field__label"
        v-if="label || $slots['label']"
        :id="ariaLabelledby"
      >
        <!-- @slot Optional slot for complex labels. -->
        <slot name="label">{{ label }}</slot>
      </label>

      <span
        class="field__description"
        v-if="description || $slots['description']"
        :id="ariaDescribedby"
      >
        <!-- @slot Optional slot for complex descriptions, e.g. links -->
        <slot name="description">{{ description }}</slot>
      </span>
    </div>

    <div class="field__content">
      <slot v-bind="$attrs" />
    </div>
    <div class="field__errors">
      <div
        v-for="error in errors"
        ref="error"
        :key="error"
        class="field__error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Field",
  mounted() {
    console.log("wtf", this.$attrs);
  },
  props: {
    /**
     * Field description
     */
    description: {
      type: String,
      required: false
    },
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
  },
  computed: {
    ariaLabelledby() {
      return `aria-${this._uid}-label`;
    },
    ariaDescribedby() {
      return `aria-${this._uid}-description`;
    }
  },
  provide() {
    return {
      ariaLabelledby: this.ariaLabelledby,
      ariaDescribedby: this.ariaDescribedby,
      fieldProps: this.$props
    };
  }
};
</script>

<style lang="scss">
.field {
  margin-bottom: $field-margin;

  &__header {
    padding-left: $input-border-width;
    padding-bottom: $field-label-padding-bottom;
  }

  &__label {
    color: $field-label-color;
    font-size: $field-label-font-size;
    line-height: $field-label-line-height;
    display: block;
    font-weight: $field-label-font-weight;

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
    padding-left: $input-border-width;
  }

  &__description,
  &__error {
    font-size: $field-label-font-size;
    font-style: inherit;
    font-weight: normal;
    line-height: $field-label-line-height;
  }

  &__error {
    align-items: center;
    color: $danger-color;
    display: flex;
  }

  &[is-required] .field__label::after {
    opacity: 1;
  }

  &__content {
    display: flex;
  }
}
</style>

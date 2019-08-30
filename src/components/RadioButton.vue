<template>
  <label
    ref="radio-button"
    class="radio-button"
    :for="id"
    tabindex="-1"
    :is-disabled="isDisabled"
    :style="{ display: isBlock ? 'block' : 'inline-block' }"
  >
    <input
      type="radio"
      ref="input"
      v-model="computedValue"
      :value="nativeValue"
      :id="id"
      :is-invalid="isInvalid"
      :disabled="isDisabled"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
    />
    <RadioButtonIcon size="is-xsmall" />
    <span v-if="$slots['default']" class="label"><slot /></span>
  </label>
</template>

<script>
import RadioButtonIcon from "@/components/icons/RadioButtonIcon";

export default {
  name: "RadioButton",
  components: { RadioButtonIcon },
  props: {
    isBlock: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    nativeValue: {
      type: null,
      required: true
    },
    value: {
      type: null,
      default: false
    }
  },
  data() {
    return { id: undefined };
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set() {
        this.$emit("input", this.nativeValue);
      }
    }
  },
  watch: {
    isFocused: {
      handler(isFocused) {
        if (isFocused) {
          this.$nextTick(() => this.$refs.input.focus());
        }
      },
      immediate: true
    }
  },
  created() {
    this.id = this._uid;
  },
  methods: {
    onBlur(e) {
      if (!this.$refs.checkbox.contains(e.relatedTarget)) {
        this.$emit("blur", e);
      }
    },
    onChange(e) {
      this.$emit("change", e);
    },
    onFocus(e) {
      this.$emit("focus", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.radio-button {
  display: inline-flex;
  position: relative;
  cursor: pointer;
  outline: none;

  + .radio-button {
    margin-top: $input-padding;
  }

  .label {
    font-size: $input-font-size;
    line-height: 1;
    padding: ($icon-size-xsmall - $input-font-size)/2 $input-padding;
  }

  &[is-disabled] {
    .label {
      opacity: 0.5;
    }
  }

  input[type="radio"] {
    left: 50%;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    cursor: pointer;

    + .icon {
      ::v-deep circle {
        color: $input-background-color;
        stroke: $input-border-color;
        stroke-width: $input-border-width;
        transition: $input-transition;
      }

      ::v-deep path {
        fill: $input-background-color;
        transition: $input-transition;
      }
    }

    &:checked {
      + .icon {
        ::v-deep circle {
          color: $primary-color;
          fill: $primary-color;
          stroke: $primary-color;
        }
      }
    }

    &:not([is-invalid]):focus {
      + .icon {
        ::v-deep circle {
          stroke: $input-border-color-focused;
        }
      }
    }

    &[is-invalid] {
      + .icon {
        ::v-deep circle {
          stroke: $input-border-color-invalid;
        }
      }
    }

    &[is-disabled],
    &[disabled] {
      + .icon {
        ::v-deep circle {
          fill: currentColor !important;
          stroke: currentColor !important;
          opacity: 0.5 !important;
        }
      }
    }
  }

  &:hover {
    input[type="radio"] {
      &:not(:checked) {
        + .icon {
          ::v-deep circle {
            fill: $input-background-color-hover;
          }

          ::v-deep path {
            fill: $input-background-color-hover;
          }
        }
      }

      &:checked {
        + .icon {
          ::v-deep circle {
            fill: lighten($primary-color, 10);
            stroke: lighten($primary-color, 10);
          }
        }
      }
    }
  }
}
</style>

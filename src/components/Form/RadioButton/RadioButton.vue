<template>
  <label
    ref="wrapper"
    class="radio-button inline-input"
    tabindex="-1"
    :for="id"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :is-invalid="isInvalid"
    @click="focusInput"
    @keydown.prevent.enter="$refs.wrapper.click()"
  >
    <input
      type="radio"
      ref="input"
      v-model="computedValue"
      :disabled="isDisabled"
      :required="required"
      :id="id"
      :value="nativeValue"
      @blur="onInputBlur"
      @focus="onInputFocus"
    />
    <Icon icon="radio-button" size="is-xsmall" />
    <span v-if="$slots['default']" class="label"><slot /></span>
  </label>
</template>

<script>
import Icon from "@components/Icon/Icon";
import InputMixin from "@/mixins/InputMixin";

export default {
  name: "RadioButton",
  components: { Icon },
  mixins: [InputMixin],
  props: {
    nativeValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      required: true
    },
    name: String,
    value: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false
    }
  },
  created() {
    this.id = `ck-radioButton-${this._uid}`;
  }
};
</script>

<style lang="scss" scoped>
.radio-button {
  /**
   * Default component appearance
  **/
  .icon {
    ::v-deep circle {
      color: $radio-button-color;
      stroke: $radio-button-border-color;
      stroke-width: $input-border-width;
      transition: $input-transition;
    }

    ::v-deep path {
      fill: $radio-button-color;
      transition: $input-transition;
    }
  }

  /**
   * Checked state
  **/
  input[type="radio"] {
    &:checked {
      + .icon {
        ::v-deep circle {
          color: $radio-button-color--checked;
          fill: $radio-button-color--checked;
          stroke: $radio-button-border-color--checked;
        }
      }
    }
  }

  /**
   * Hover state
  **/
  &:hover {
    input[type="radio"] {
      &:not(:checked) {
        + .icon {
          ::v-deep circle {
            fill: $radio-button-color--hover;
          }

          ::v-deep path {
            fill: $radio-button-color--hover;
          }
        }
      }

      &:checked {
        + .icon {
          ::v-deep circle {
            fill: $radio-button-color--checked--hover;
            stroke: $radio-button-color--checked--hover;
          }
        }
      }
    }
  }

  /**
   * Active state
  **/
  &:active {
    input[type="radio"] {
      &:not(:checked) {
        + .icon {
          ::v-deep circle {
            fill: $radio-button-color--active;
          }

          ::v-deep path {
            fill: $radio-button-color--active;
          }
        }
      }

      &:checked {
        + .icon {
          ::v-deep circle {
            fill: $radio-button-color--checked--active;
            stroke: $radio-button-color--checked--active;
          }
        }
      }
    }
  }

  /**
   * Focused state
  **/
  &:not([is-invalid])[is-focused] {
    > .icon {
      ::v-deep circle {
        stroke: $radio-button-border-color--focus;
      }
    }
  }

  /**
   * Invalid state
  **/
  &[is-invalid] {
    > .icon {
      ::v-deep circle {
        stroke: $radio-button-border-color--invalid;
      }
    }
  }

  /**
   * Disabled state
  **/
  &[is-disabled] {
    > .icon {
      opacity: 0.5 !important;

      ::v-deep circle {
        fill: currentColor !important;
        stroke: currentColor !important;
      }
    }
  }
}
</style>

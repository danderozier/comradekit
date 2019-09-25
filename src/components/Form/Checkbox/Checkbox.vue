<template>
  <label
    ref="wrapper"
    class="checkbox inline-input"
    tabindex="-1"
    :for="id"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :is-invalid="isInvalid"
    @click="focusInput"
    @keydown.prevent.enter="$refs.wrapper.click()"
  >
    <input
      type="checkbox"
      ref="input"
      v-model="computedValue"
      :disabled="isDisabled"
      :false-value="falseValue"
      :required="required"
      :id="id"
      :indeterminate="indeterminate"
      :name="name"
      :true-value="trueValue"
      :value="nativeValue"
      @blur="onInputBlur"
      @focus="onInputFocus"
    />
    <Icon :icon="iconType" size="is-xsmall" />
    <span v-if="$slots['default']" class="label"><slot /></span>
  </label>
</template>

<script>
import Icon from "@components/Icon/Icon";
import InputMixin from "@/mixins/InputMixin";

export default {
  name: "Checkbox",
  components: { Icon },
  mixins: [InputMixin],
  props: {
    /**
     * Toggle the component's `indeterminate` state.
     */
    indeterminate: {
      type: Boolean
    },
    /**
     * Binding value
     * @model
     */
    value: [String, Number, Boolean, Function, Object, Array],
    /**
     * Same as native `value` attribute
     */
    nativeValue: [String, Number, Boolean, Function, Object, Array],
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false
    },
    /**
     * Same as native `name` attribute
     */
    name: String
  },
  data() {
    return {
      id: undefined
    };
  },
  created() {
    this.id = `ck-checkbox-${this._uid}`;
  },
  computed: {
    iconType() {
      return this.indeterminate ? "checkbox-indeterminate" : "checkbox";
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  /**
   * Default component appearance
  **/
  .icon {
    ::v-deep rect {
      color: $checkbox-color;
      stroke: $checkbox-border-color;
      stroke-width: $input-border-width;
      transition: $input-transition;
    }

    ::v-deep path {
      fill: $checkbox-color;
      transition: $input-transition;
    }
  }

  /**
   * Highlighted states (Checked, Indeterminate)
  **/
  input[type="checkbox"] {
    &:checked,
    &[indeterminate] {
      + .icon {
        ::v-deep rect {
          color: $checkbox-color--checked;
          fill: $checkbox-color--checked;
          stroke: $checkbox-border-color--checked;
        }
      }
    }
  }

  /**
   * Hover state
  **/
  &:hover {
    input[type="checkbox"] {
      &:not(:checked) {
        + .icon {
          ::v-deep rect {
            fill: $checkbox-color--hover;
          }

          ::v-deep path {
            fill: $checkbox-color--hover;
          }
        }
      }

      &:checked,
      &[indeterminate] {
        + .icon {
          ::v-deep rect {
            fill: $checkbox-color--checked--hover;
            stroke: $checkbox-color--checked--hover;
          }
        }
      }
    }
  }

  /**
   * Active state
  **/
  &:active {
    input[type="checkbox"] {
      &:not(:checked) {
        + .icon {
          ::v-deep rect {
            fill: $checkbox-color--active;
          }

          ::v-deep path {
            fill: $checkbox-color--active;
          }
        }
      }

      &:checked,
      &[indeterminate] {
        + .icon {
          ::v-deep rect {
            fill: $checkbox-color--checked--active;
            stroke: $checkbox-color--checked--active;
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
      ::v-deep rect {
        stroke: $checkbox-border-color--focus;
      }
    }
  }

  /**
   * Invalid state
  **/
  &[is-invalid] {
    > .icon {
      ::v-deep rect {
        stroke: $checkbox-border-color--invalid;
      }
    }
  }

  /**
   * Disabled state
  **/
  &[is-disabled] {
    > .icon {
      opacity: 0.5 !important;

      ::v-deep rect {
        fill: currentColor !important;
        stroke: currentColor !important;
      }
    }
  }
}
</style>

<template>
  <label
    ref="checkbox"
    class="checkbox"
    tabindex="-1"
    :for="id"
    :is-disabled="isDisabled"
    :style="{ display: isBlock ? 'block' : 'inline-block' }"
  >
    <input
      type="checkbox"
      ref="input"
      v-model="computedValue"
      :id="id"
      :is-invalid="isInvalid"
      :disabled="isDisabled"
      :indeterminate="indeterminate"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
    />
    <CheckboxIndeterminateIcon size="is-xsmall" v-if="indeterminate" />
    <CheckboxIcon size="is-xsmall" v-else />
    <span v-if="$slots['default']" class="label"><slot /></span>
  </label>
</template>

<script>
import CheckboxIcon from "@/components/icons/CheckboxIcon";
import CheckboxIndeterminateIcon from "@/components/icons/CheckboxIndeterminateIcon";
import inputtable from "@/mixins/inputtable";
import checkboxInput from "@/mixins/checkboxInput";

export default {
  name: "Checkbox",
  mixins: [inputtable, checkboxInput],
  components: { CheckboxIcon, CheckboxIndeterminateIcon },
  props: {
    indeterminate: {
      type: Boolean
    },
    isBlock: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: inline-flex;
  position: relative;
  cursor: pointer;
  outline: none;

  + .checkbox {
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

  input[type="checkbox"] {
    left: 50%;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    cursor: pointer;

    + .icon {
      ::v-deep rect {
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

    &:checked,
    &[indeterminate] {
      + .icon {
        ::v-deep rect {
          color: $primary-color;
          fill: $primary-color;
          stroke: $primary-color;
        }
      }
    }

    &:not([is-invalid]):focus {
      + .icon {
        ::v-deep rect {
          stroke: $input-border-color-focused;
        }
      }
    }

    &[is-invalid] {
      + .icon {
        ::v-deep rect {
          stroke: $input-border-color-invalid;
        }
      }
    }

    &[is-disabled],
    &[disabled] {
      + .icon {
        opacity: 0.5 !important;

        ::v-deep rect {
          fill: currentColor !important;
          stroke: currentColor !important;
        }
      }
    }
  }

  &:hover {
    input[type="checkbox"] {
      &:not(:checked) {
        + .icon {
          ::v-deep rect {
            fill: $input-background-color-hover;
          }

          ::v-deep path {
            fill: $input-background-color-hover;
          }
        }
      }

      &:checked,
      &[indeterminate] {
        + .icon {
          ::v-deep rect {
            fill: lighten($primary-color, 10);
            stroke: lighten($primary-color, 10);
          }
        }
      }
    }
  }
}
</style>

<template>
  <label
    ref="wrapper"
    class="toggle inline-input"
    tabindex="-1"
    :for="id"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :is-invalid="isInvalid"
    @click="focusInput"
    @keydown.prevent.enter="$refs.wrapper.click()"
    @mousedown="isMouseDown = true"
    @mouseup="isMouseDown = false"
    @mouseout="isMouseDown = false"
    @blur="isMouseDown = false"
  >
    <input
      type="checkbox"
      ref="input"
      v-model="computedValue"
      :disabled="isDisabled"
      :false-value="falseValue"
      :required="required"
      :id="id"
      :is-invalid="isInvalid"
      :name="name"
      :true-value="trueValue"
      :value="nativeValue"
      @blur="onInputBlur"
      @focus="onInputFocus"
    />
    <span class="switch" />
    <span class="label" v-if="$slots['default']"><slot /></span>
  </label>
</template>

<script>
import Checkbox from "@components/Form/Checkbox/Checkbox";

export default {
  name: "Toggle",
  extends: Checkbox,
  data() {
    return {
      isMouseDown: false
    };
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  /**
   * Default component appearance
   */
  .switch {
    background: $toggle-background-color;
    border-radius: calc(0.75rem + #{$input-border-width});
    box-sizing: content-box;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    padding: $input-border-width;
    transition: $input-transition;
    width: 1.5rem;

    &::before {
      border-radius: 0.375rem;
      content: "";
      display: block;
      width: 0.75rem;
      height: 0.75rem;
      background: $toggle-color;
      transition: 0.15s ease-out, width 0.15s ease-out;
    }
  }

  /**
   * Checked State
   */
  input[type="checkbox"]:checked + .switch {
    background: $toggle-background-color--checked;

    &::before {
      transform: translate3d(100%, 0, 0);
    }
  }

  /**
   * Active State
   */
  &:active {
    > .switch {
      background: $toggle-background-color--active;

      &::before {
        width: 1rem;
      }
    }

    input[type="checkbox"]:checked {
      + .switch {
        background: $toggle-background-color--checked--active;

        &::before {
          transform: translate3d(50%, 0, 0);
        }
      }
    }
  }

  /**
   * Focused State
   */
  &[is-focused] {
    > .switch {
      box-shadow: 0 0 0 $input-border-width white,
        0 0 0 calc(#{$input-border-width} + 2px) $input-border-color-focused;
    }
  }

  /**
   * Invalid State
   */
  // &[is-invalid] {
  //   > .switch {
  //     color: $toggle-invalid-color;
  //   }
  // }

  &[is-invalid] {
    input[type="checkbox"]:checked {
      + .switch {
        background: $toggle-background-color--invalid;
      }
    }

    &:active {
      // > .switch {
      //   background: $toggle-background-color--invalid--active;
      // }

      input[type="checkbox"]:checked {
        + .switch {
          background: $toggle-background-color--invalid--active;
        }
      }
    }
  }
}
</style>

<template>
  <div
    class="dropdown-item"
    tabindex="0"
    :disabled="disabled"
    :selected="selected"
    :focused="isFocused"
    @click="onClick"
    @keydown="onKeydown"
    @mouseover="onMouseover"
    @mouseleave="onMouseleave"
    @focus="onFocus"
    @blur="onBlur"
    v-on="$listeners"
  >
    <slot></slot> {{ isFocused }}
  </div>
</template>

<script>
import { keyCodes } from "@utilities/helpers";

export default {
  name: "DropdownItem",
  props: {
    label: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    focusable: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFocused: false
    };
  },
  // watch: {
  //   isFocused: {
  //     handler(isFocused) {
  //       if (isFocused) {
  //         this.$nextTick(() => this.$el.focus());
  //       } else {
  //         this.$nextTick(() => this.$el.blur());
  //       }
  //     },
  //     immediate: true
  //   }
  // },
  methods: {
    dilb() {
      console.log("dingle");
      this.isFocused = true;
    },
    onClick() {
      this.$parent.$emit("select", this);
      this.$emit("select");
    },
    onFocus() {
      // this.isFocused = true;
    },
    onBlur() {
      // this.isFocused = false;
    },
    onMouseover() {
      if (!this.focusable) return;

      this.$parent.$emit("hover", this);
      this.isFocused = true;
    },
    onMouseleave() {
      this.isFocused = false;
    },
    onKeydown(e) {
      switch (e.keyCode) {
        case keyCodes.enter:
          this.onClick();
          break;
        case keyCodes.up:
          this.$parent.$emit("previous");
          break;
        case keyCodes.down:
          this.$parent.$emit("next");
          break;
        case keyCodes.esc:
          this.$parent.$emit("cancel");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown-item {
  cursor: pointer;
  min-width: 16rem;
  padding: $dropdown-item-padding;

  &:focus {
    // outline: none;
  }

  &[focused]:not([disabled]):not([selected]) {
    background: $dropdown-item-background-color-hover;
    color: $dropdown-item-color-hover;
  }

  &[disabled] {
    cursor: default;
    opacity: $dropdown-item-opacity-disabled;
    pointer-events: none;
  }

  &[selected] {
    background: $dropdown-item-background-color-selected;
    color: $dropdown-item-color-selected;
  }
}
</style>

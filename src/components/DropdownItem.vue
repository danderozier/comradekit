<template>
  <div
    class="dropdown-item"
    :disabled="disabled"
    :selected="selected"
    :focused="isFocused"
    @keyup.enter="onEnter"
    @mouseover="onMouseover"
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template>

<script>
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
  methods: {
    // emitSelect() {
    //   console.log("DropdownItem emitSelect()");
    //   this.$emit("select");
    //   this.$parent.$emit("item-select");
    // },
    onEnter() {
      console.log("DropdownItem onEnter()");
    },
    onMouseover() {
      this.$parent.$emit("dropdown-item-hover", this.$el);
    }
  }
};
</script>

<style lang="scss" scoped>
$dropdown-item-padding: 0.5rem 0.75rem;
$dropdown-item-background-color-hover: #eee;
$dropdown-item-color-hover: inherit;
$dropdown-item-background-color-selected: blue;
$dropdown-item-color-selected: white;
$dropdown-item-opacity-disabled: 0.5;

.dropdown-item {
  cursor: pointer;
  min-width: 16rem;
  padding: $dropdown-item-padding;

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

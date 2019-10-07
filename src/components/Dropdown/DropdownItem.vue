<template>
  <div
    class="dropdown-item"
    :disabled="disabled"
    :selected="selected"
    :active="isActive"
    @click="onClick"
    @mouseover="onMouseover"
    v-on="$listeners"
  >
    <!-- @slot Item content -->
    <slot></slot> {{ isActive }}
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
    focusable: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    eventBus: { default: undefined }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    onClick() {
      this.$emit("select", this);
    },
    onMouseover() {
      if (this.eventBus) {
        this.eventBus.$emit("item-hover", this);
      }
    }
  },
  watch: {
    isActive() {
      console.log("DropdownItem isActive changed", this.isActive);
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

  &[active]:not([disabled]):not([selected]) {
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

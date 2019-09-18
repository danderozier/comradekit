<template>
  <div class="dropdown" ref="wrapper" @keydown="onKeyDown" @blur="onBlur">
    <div
      class="dropdown-trigger"
      @click.stop="isOpen = !isOpen"
      @open-dropdown="isOpen = true"
    >
      <slot name="trigger" v-on="$listeners" />
    </div>

    <div
      class="dropdown-content"
      ref="content"
      tabindex="-1"
      v-show="isOpen"
      v-on-clickaway="onClickaway"
      @click="onDropdownItemClick"
    >
      <slot v-on="$listeners" />
    </div>
  </div>
</template>

<script>
import { keyCodes } from "@utilities/helpers";
import { mixin as clickaway } from "vue-clickaway";
import _ from "lodash";

export default {
  name: "Dropdown",
  mixins: [clickaway],
  data() {
    return {
      dropdownItems: [],
      currentIndex: -1,
      isOpen: false,
      isFocused: false
    };
  },
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: undefined
    }
  },
  mounted() {
    this.$on("dropdown-item-hover", el => {
      this.currentIndex = _.findIndex(this.dropdownItems, i => {
        return i === el;
      });
    });
  },
  watch: {
    isOpen(value) {
      this.getDropdownItems();

      if (value) {
        this.$nextTick(() => this.$refs.wrapper.focus());
        this.$emit("dropdown-close");
      } else {
        this.$nextTick(() => this.$refs.wrapper.blur());
        this.$emit("dropdown-open");
        this.currentIndex = undefined;
      }
    },
    currentIndex() {
      this.dropdownItems.forEach((item, index) => {
        this.currentIndex === index
          ? item.setAttribute("focused", true)
          : item.removeAttribute("focused");
      });
    }
  },
  methods: {
    onBlur() {
      console.log("Dropdown: onBlur()");
    },
    onDropdownItemClick() {
      this.isOpen = false;
    },
    onKeyDown(e) {
      console.log("Dropdown: onKeyDown()");
      if (e.keyCode === keyCodes.esc) {
        this.isOpen = false;
      } else if (
        !this.isOpen &&
        [keyCodes.up, keyCodes.down].includes(e.keyCode)
      ) {
        this.isOpen = true;
      }

      this.$nextTick(() => this.updateCurrentIndex(e));
    },
    onClickaway() {
      if (this.isOpen) this.isOpen = false;
    },
    close() {
      this.isOpen = false;
    },
    open() {
      this.isOpen = true;
    },
    getDropdownItems() {
      this.dropdownItems = Array.from(
        this.$refs.content.querySelectorAll(".dropdown-item")
      );
    },
    updateCurrentIndex(e) {
      this.getDropdownItems();

      if (e.keyCode === keyCodes.tab) {
        this.isOpen = false;
        return;
      } else if (e.keyCode === keyCodes.down) {
        this.nextItem();
      } else if (e.keyCode === keyCodes.up) {
        this.prevItem();
      } else if (e.keyCode === keyCodes.enter && this.currentIndex !== -1) {
        this.dropdownItems[this.currentIndex].click();
      } else {
        return;
      }

      e.preventDefault();
    },
    nextItem() {
      const item = this.dropdownItems[this.currentIndex + 1];

      if (!item) {
        if (!this.dropdownItems.length) return;

        this.currentIndex = -1;
        this.nextItem();
        return;
      } else if (item.hasAttribute("disabled")) {
        this.currentIndex++;
        this.nextItem();
        return;
      } else {
        this.currentIndex++;
      }
    },
    prevItem() {
      const item = this.dropdownItems[this.currentIndex - 1];

      if (!item) {
        if (!this.dropdownItems.length) return;

        this.currentIndex = this.dropdownItems.length;
        this.prevItem();
        return;
      } else if (item.hasAttribute("disabled")) {
        this.currentIndex--;
        this.prevItem();
        return;
      } else {
        this.currentIndex--;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$dropdown-background-color: white;
$dropdown-font-size: 0.875rem;
$dropdown-padding: 0.5rem 0;
$dropdown-border-radius: 0.25rem;
$dropdown-box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
  rgba(9, 30, 66, 0.31) 0px 0px 1px;
$dropdown-margin: 0.5rem;

.dropdown {
  position: relative;
  z-index: 1;

  .dropdown-content {
    background-color: $dropdown-background-color;
    border-radius: $dropdown-border-radius;
    box-shadow: $dropdown-box-shadow;
    display: inline-flex;
    flex-direction: column;
    font-size: $dropdown-font-size;
    left: 0;
    padding: $dropdown-padding;
    position: absolute;
    top: calc(#{$dropdown-margin} + 100%);
    z-index: 1;

    &:focus {
      outline: none;
    }
  }
}
</style>

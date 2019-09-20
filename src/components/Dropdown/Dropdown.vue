<template>
  <div class="dropdown" ref="wrapper">
    <div
      @click="toggle"
      aria-haspopup="true"
      class="dropdown__trigger"
      ref="trigger"
      role="button"
      @keyup.down="nextItem"
      @keyup.up="prevItem"
    >
      <!-- @slot Dropdown trigger (button, input, etc) -->
      <slot name="trigger" /> {{ focusedItemIndex }}
    </div>

    <div class="dropdown__content" ref="content">
      <Popper
        v-if="isOpen"
        :target-element="this.$refs.trigger"
        placement="bottom-start"
        :flip-variations-by-content="true"
        @hover="onItemHover"
        @previous="prevItem"
        @next="nextItem"
        @select="onSelect"
        @cancel="close"
      >
        <div
          :role="ariaRole"
          :aria-hidden="!isOpen"
          class="dropdown-content"
          ref="contentz"
          tabindex="-1"
        >
          <!-- @slot Dropdown content -->
          <slot ref="dilb" />
        </div>
      </Popper>
    </div>
  </div>
</template>

<script>
import Popper from "@components/Popper/Popper";
import { clickaway } from "@mixins";
import { inclusionValidator } from "@utilities/propValidators";
import _ from "lodash";

export default {
  name: "Dropdown",
  mixins: [clickaway],
  components: { Popper },
  data() {
    return {
      isOpen: false,
      isFocused: false,
      items: [],
      focusedItemIndex: undefined
    };
  },
  props: {
    ariaRole: {
      type: String,
      required: false,
      validator: prop => {
        inclusionValidator(prop, "list", "menu");
      }
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
      this.$emit("close");
    },
    open() {
      this.isOpen = true;
      this.$emit("open");
    },
    onSelect() {
      this.close();
    },
    onClickaway() {
      this.close();
    },
    onItemHover(item) {
      this.focusedItemIndex = _.findIndex(
        this.items,
        i => i._uid === item._uid
      );
    },
    prevItem() {
      const item = this.items[this.focusedItemIndex - 1];

      if (!item) {
        if (!this.items.length) return;

        this.focusedItemIndex = this.items.length;
        this.prevItem();
        return;
      } else if (item.isDisabled) {
        this.focusedItemIndex--;
        this.prevItem();
        return;
      } else {
        this.focusedItemIndex--;
      }
    },
    nextItem() {
      const item = this.items[this.focusedItemIndex + 1];

      if (!item) {
        if (!this.items.length) return;

        this.focusedItemIndex = -1;
        this.nextItem();
        return;
      } else if (item.isDisabled) {
        this.focusedItemIndex++;
        this.nextItem();
        return;
      } else {
        this.focusedItemIndex++;
      }
    },
    updateItems() {
      this.items = _.map(
        _.filter(this.$slots.default, el => {
          return (
            el.componentInstance &&
            el.componentInstance.$options._componentTag === "DropdownItem"
          );
        }),
        el => {
          return el.componentInstance;
        }
      );
    }
  },
  watch: {
    isOpen(value) {
      if (value) {
        this.$nextTick(() => {
          this.updateItems();
        });
      } else {
        this.focusedItemIndex = undefined;
      }
    },
    focusedItemIndex() {
      this.items.forEach((item, index) => {
        item.isFocused = this.focusedItemIndex === index;
      });
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
  display: inline-flex;
  position: relative;
  z-index: 1;

  &__trigger {
    flex: auto;
  }

  .dropdown-content {
    background-color: $dropdown-background-color;
    border-radius: $dropdown-border-radius;
    box-shadow: $dropdown-box-shadow;
    display: inline-flex;
    flex-direction: column;
    font-size: $dropdown-font-size;
    // left: 0;
    padding: $dropdown-padding;
    // position: absolute;
    // top: calc(#{$dropdown-margin} + 100%);
    // z-index: 1;

    &:focus {
      outline: none;
    }
  }
}
</style>

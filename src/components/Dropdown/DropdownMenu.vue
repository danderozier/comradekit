<template>
  <div @keydown="onKeydown">
    <div ref="children" @hover="dingle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { keyCodes } from "@utilities/helpers";

export default {
  name: "DropdownMenu",
  data() {
    return {
      currentIndex: -1,
      children: [],
      observer: null
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  methods: {
    dingle() {
      console.log("fingus");
    },
    onItemHover(item) {
      console.log("onItemHover", item);
      this.currentIndex = _.findIndex(this.children, i => i._uid === item._uid);
    },
    onKeydown(e) {
      switch (e.keyCode) {
        case keyCodes.up:
          this.$nextTick(() => this.previous());
          break;
        case keyCodes.down:
          this.$nextTick(() => this.next());
          break;
        case keyCodes.enter:
          this.$nextTick(() => this.select());
          break;
      }
    },
    updateChildren() {
      console.log("Updating children", this.$slots.default);
      this.children = _.map(
        _.filter(this.$slots.default, el => {
          return (
            el.componentInstance &&
            el.componentInstance.$options._componentTag === "DropdownItem"
          );
        }),
        el => {
          // console.log("wtf", el.componentInstance);
          // el.componentInstance.$on("hover", this.onItemHover);
          return el.componentInstance;
        }
      );
    },
    resetCurrentIndex() {
      this.currentIndex = -1;
    },
    previous() {
      const item = this.children[this.currentIndex - 1];

      if (!item) {
        if (!this.children.length) return;

        this.currentIndex = this.children.length;
        this.previous();
        return;
      } else if (item.isDisabled) {
        this.currentIndex--;
        this.previous();
        return;
      } else {
        this.currentIndex--;
      }
    },
    next() {
      const item = this.children[this.currentIndex + 1];

      if (!item) {
        if (!this.children.length) return;

        this.currentIndex = -1;
        this.next();
        return;
      } else if (item.isDisabled) {
        this.currentIndex++;
        this.next();
        return;
      } else {
        this.currentIndex++;
      }
    },
    select() {
      if (this.children[this.currentIndex]) {
        this.children[this.currentIndex].$el.click();
      }
    }
  },
  /**
   * Optionally injects an event bus provided by
   * parent. Useful in cases where the child component
   * needs to listen to events occurring on a parent
   * or sibling (like a Dropdown trigger, for instance).
   */
  inject: {
    eventBus: { default: false }
  },
  mounted() {
    console.log("DropdownMenu mounted()");
    this.observer = new MutationObserver(this.updateChildren);
    this.observer.observe(this.$refs.children, { childList: true });
    this.updateChildren();
  },
  created() {
    console.log("DropdownMenu created()");
    // If event bus is provided, listen for keydown event.
    if (this.eventBus) {
      this.eventBus.$on("keydown", this.onKeydown);
      this.eventBus.$on("close", this.resetCurrentIndex);
      this.eventBus.$on("item-hover", this.onItemHover);
    }
  },
  beforeDestroy() {
    console.log("DropdownMenu beforeDestroy()");
    // If event bus is provided, remove keydown listener.
    if (this.eventBus) {
      this.eventBus.$off("keydown", this.onKeydown);
      this.eventBus.$off("close", this.resetCurrentIndex);
      this.eventBus.$off("item-hover", this.onItemHover);
    }

    // Clean up MutationObserver (see mounted())
    this.observer.disconnect();
  },
  watch: {
    currentIndex() {
      console.log("CurrentIndex changed to", this.currentIndex);
      this.children.forEach((child, index) => {
        if (this.currentIndex === index) {
          console.log("Current item is:", child);
        }
        child.isActive = this.currentIndex === index;
      });
    }
  }
};
</script>

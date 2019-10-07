<template>
  <div class="dropdown" ref="wrapper">
    <div
      aria-haspopup="true"
      class="dropdown__trigger"
      ref="trigger"
      role="button"
      @click="toggle"
      @focusout="onFocusout"
      @keydown="onKeydown"
    >
      <!-- @slot Dropdown trigger (button, input, etc) -->
      <slot name="trigger" />
    </div>

    <div class="dropdown__content" ref="content">
      <Popper
        placement="bottom-start"
        :flip-variations-by-content="true"
        :target-element="targetElement"
      >
        <div
          v-show="isOpen"
          class="dropdown-content"
          :aria-hidden="!isOpen"
          :class="{ 'is-scrollable': isScrollable }"
          :role="ariaRole"
        >
          <!-- @slot Dropdown content -->
          <slot />
        </div>
      </Popper>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Popper from "@components/Popper/Popper";
import { clickaway } from "@mixins";
import { inclusionValidator } from "@utilities/propValidators";
import { keyCodes } from "@utilities/helpers";

const eventBus = new Vue();

export default {
  name: "Dropdown",
  mixins: [clickaway],
  components: { Popper },
  /**
   * Provide an event bus to pass keydown events
   * to components in the dropdown content.
   */
  provide() {
    return { eventBus };
  },
  data() {
    return {
      isOpen: false,
      targetElement: null
    };
  },
  mounted() {
    console.log(this.$refs.trigger);
    this.targetElement = this.$refs.trigger;
  },
  props: {
    /**
     * Provide the ARIA role for the dropdown.
     * Options include `list`, `menu`
     */
    ariaRole: {
      type: String,
      required: false,
      validator: prop => {
        inclusionValidator(prop, "list", "menu");
      }
    },
    /**
     * If true, dropdown height will be limited and
     * the dropdown content will scroll.
     */
    isScrollable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * Handle keydown events.
     */
    onKeydown(e) {
      console.log("Dropdown detects keydown", e);

      switch (e.keyCode) {
        // Pressing up or down opens the dropdown.
        case keyCodes.up:
          this.open();
          break;
        case keyCodes.down:
          this.open();
          break;
        // Pressing escape closes the dropdown.
        case keyCodes.esc:
          this.close();
          break;
      }
      // Pass keydown events along to children injecting
      // the provided event bus.
      eventBus.$emit("keydown", e);
    },
    /**
     * Handle when the trigger loses focus.
     */
    onFocusout() {
      console.log("onfocuseout");
      this.close();
    },
    /**
     * Handle clicks away from the dropdown.
     */
    onClickaway() {
      this.close();
    },
    /**
     * Toggle the dropdown.
     * @public
     */
    toggle() {
      this.isOpen = !this.isOpen;
    },
    /**
     * Close the dropdown.
     * @public
     */
    close() {
      this.isOpen = false;
      this.$emit("close");
      eventBus.$emit("close");
    },
    /**
     * Open the dropdown.
     * @public
     */
    open() {
      this.isOpen = true;
      this.$emit("open");
      eventBus.$emit("open");
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

    // &.is-scrollable {
    //   max-height: 20rem;
    //   overflow: scroll;
    // }
  }
}
</style>

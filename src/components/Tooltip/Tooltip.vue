<template>
  <span @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <!-- @slot Anchor element for the tooltip -->
    <slot />
    <Popper
      v-if="isActive"
      :target-element="this.$slots.default[0].elm"
      :placement="position"
      @create="onCreate"
    >
      <span class="tooltip" :class="computedClasses">
        <span class="tooltip__inner">{{ label }}</span>
      </span>
    </Popper>
  </span>
</template>

<script>
import Popper from "@components/Popper/Popper";
export default {
  name: "Tooltip",
  components: { Popper },
  props: {
    /**
     * Whether tooltip is active
     */
    active: {
      type: Boolean,
      default: false
    },
    /**
     * Tooltip text
     */
    label: {
      type: String,
      required: true
    },
    /**
     * Tooltip position relative to anchor element
     * `top, right, bottom, left`
     */
    position: {
      type: String,
      default: "bottom"
    }
  },
  data() {
    return {
      isActive: false,
      isVisible: false
    };
  },
  computed: {
    computedClasses() {
      return {
        "is-top": this.position === "top",
        "is-right": this.position === "right",
        "is-bottom": this.position === "bottom",
        "is-left": this.position === "left",
        "is-visible": this.isVisible
      };
    }
  },
  methods: {
    onMouseEnter() {
      this.isActive = true;
    },
    onMouseLeave() {
      this.isActive = false;
      this.isVisible = false;
    },
    onCreate() {
      this.isVisible = true;
    }
  },
  watch: {
    active(value) {
      this.isActive = value;
    }
  }
};
</script>

<style lang="scss" scoped>
$tooltip-bgcolor: rgba(0, 0, 0, 0.8);
$tooltip-color: white;
$tooltip-border-radius: 0.25rem;
$tooltip-font-size: 0.75rem;
$tooltip-padding: 0.25rem 0.5rem;
$tooltip-arrow-size: 0.25rem;
$tooltip-transition-duration: 0.2s;
$tooltip-max-width: 15rem;

.tooltip {
  max-width: $tooltip-max-width;
  opacity: 0;
  transition: $tooltip-transition-duration opacity;
  z-index: 1;

  &.is-visible {
    opacity: 1;
  }

  &__inner {
    background: $tooltip-bgcolor;
    border-radius: $tooltip-border-radius;
    color: $tooltip-color;
    font-size: $tooltip-font-size;
    order: 1;
    padding: $tooltip-padding;
  }

  &::after {
    content: "";
    height: 0;
    width: 0;
    border: $tooltip-arrow-size solid transparent;
  }

  &.is-top,
  &.is-bottom {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    text-align: center;
  }

  &.is-top {
    &::after {
      border-top-color: $tooltip-bgcolor;
      border-bottom: none;
      order: 2;
    }
  }

  &.is-bottom {
    &::after {
      border-bottom-color: $tooltip-bgcolor;
      border-top: none;
      order: 0;
    }
  }

  &.is-right,
  &.is-left {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }

  &.is-right {
    &::after {
      border-right-color: $tooltip-bgcolor;
      border-left: none;
      order: 0;
    }
  }

  &.is-left {
    text-align: left;

    &::after {
      border-left-color: $tooltip-bgcolor;
      border-right: none;
      order: 2;
    }
  }
}
</style>

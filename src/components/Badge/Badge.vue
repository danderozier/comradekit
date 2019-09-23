<template>
  <div class="badge" :class="computedClasses">{{ label }}</div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    /**
     * The maximum value to display, exclusive. Any value greater
     * than this maximum will be abbreviated.
     */
    maximum: {
      type: Number,
      default: 100
    },
    /**
     * The badge appearance.
     * `is-default`, `is-primary`, `is-warning`, `is-danger`
     */
    type: {
      type: String,
      default: "default"
    },
    /**
     * The value to display in the badge.
     */
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    computedClasses() {
      return this.type;
    },
    label() {
      return this.value >= this.maximum ? `${this.maximum - 1}+` : this.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.badge {
  background: #ddd;
  border-radius: $input-border-radius;
  color: black;
  display: inline-flex;
  font-size: 0.75rem;
  line-height: 1;
  padding: 0.25em 0.5em;

  &.is-primary {
    background: $primary-color;
    color: $primary-color-inverse;

    &.is-inverse {
      background: $primary-color-inverse;
      color: $primary-color;
    }
  }

  &.is-warning {
    background: $warning-color;
    color: $warning-color-inverse;

    &.is-inverse {
      background: $warning-color-inverse;
      color: $warning-color;
    }
  }

  &.is-danger {
    background: $danger-color;
    color: $danger-color-inverse;

    &.is-inverse {
      background: $danger-color-inverse;
      color: $danger-color;
    }
  }
}
</style>

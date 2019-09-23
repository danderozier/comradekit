<template>
  <div class="lozenge" :class="computedClasses">{{ label }}</div>
</template>

<script>
export default {
  name: "Lozenge",
  props: {
    /**
     * The lozenge appearance.
     * `is-default`, `is-primary`, `is-warning`, `is-danger`
     */
    type: {
      type: String,
      default: "default"
    },
    /**
     * The value to display in the lozenge.
     */
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    computedClasses() {
      return this.type;
    }
  }
};
</script>

<style lang="scss" scoped>
$lozenge-border-radius: $border-radius-small;

.lozenge {
  background: #ddd;
  border-radius: $lozenge-border-radius;
  color: black;
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1;
  padding: 0.333em 0.5em;
  text-transform: uppercase;

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

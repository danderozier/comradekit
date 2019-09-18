<template>
  <Field
    :class="computedClasses"
    v-bind="$props"
    v-on="computedListeners"
    @input-add="onInputAdd"
    @input-remove="onInputRemove"
  >
    <!-- <span @input="onInput"> -->
    <slot />
    <!-- </span> -->
  </Field>
</template>

<script>
import Field from "@components/Form/Field/Field";

export default {
  name: "CheckboxField",
  extends: Field,
  props: {
    /**
     * How to display component checkboxes. Options: `block, inline`
     */
    layout: {
      type: String,
      default: "block"
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    computedClasses() {
      return {
        "is-block": this.layout === "block",
        "is-inline": this.layout === "inline"
      };
    },
    computedListeners() {
      // eslint-disable-next-line
      const { input, ...listeners } = this.$listeners;
      return listeners;
    }
  },
  methods: {
    onInputAdd(value) {
      this.$emit("input", [...this.value, value]);
    },
    onInputRemove(value) {
      this.$emit("input", this.value.filter(o => o !== value));
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  &.is-block {
    ::v-deep .checkbox {
      display: flex;

      & + .checkbox {
        padding-top: $input-padding;
      }
    }
  }

  &.is-inline {
    ::v-deep .checkbox {
      display: inline-flex;

      & + .checkbox {
        padding-left: $input-padding;
      }
    }
  }
}
</style>

<template>
  <div class="dropdown__group">
    <div class="dropdown__group__heading">
      {{ label }}
    </div>
    <!-- @slot Group contents -->
    <slot v-on="$listeners" />
  </div>
</template>

<script>
export default {
  name: "DropdownGroup",
  mounted() {
    console.log("Listeners", this.$parent);
  },
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown__group {
  &__heading {
    color: gray;
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: $dropdown-item-padding;
  }
}
</style>

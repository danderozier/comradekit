<template>
  <div class="button-group">
    <!-- @slot Buttons go here -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "ButtonGroup"
};
</script>

<style lang="scss" scoped>
.button-group {
  display: inline-flex;

  > * {
    flex: 1 0 auto;

    &:not(:first-child) {
      margin-left: 0.25rem;
    }

    &:not(:last-child) {
      margin-right: 0.25rem;
    }
  }
}
</style>

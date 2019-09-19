<template>
  <div class="button-group" :spacing="spacing">
    <!-- @slot Buttons go here -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",
  props: {
    spacing: {
      type: String,
      default: "default"
    }
  }
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

  &[spacing="compact"] > * {
    &:not(:first-child) {
      margin-left: 0.125rem;
    }

    &:not(:last-child) {
      margin-right: 0.125rem;
    }
  }

  &[spacing="none"] > * {
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &:not(:first-child) {
      margin-left: 0.5px;
    }

    &:not(:last-child) {
      margin-right: 0.5px;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  }
}
</style>
